---
title: Google Pay on Web
summary: TapPay & 藍新金流的 Google Pay 串接紀錄
date: 2024-08-06
tags: 
  - JavaScript
  - Google Pay
---

公司的專案要加上支付 (信用卡, Apple Pay, Google Pay)
中間還經歷了從串 TapPay 換到串藍新 🫠
趁還有記憶時紀錄一下，也許對未來的自己會有幫助 😂 

## TapPay
### 設定
已經有 TapPay App Id, Key 之後不太需要什麼設定
可參考 [TapPay 的文件](https://docs.tappaysdk.com/google-pay/zh/portal.html#google-pay-on-the-web)


### 串接
可直接參考 [TapPay Web Example - Google Pay](https://github.com/TapPay/tappay-web-example/tree/master/Google_Pay)

1. **引入 TapPay & Google Pay SDK**
  ```js
  import {useScriptTag } from '@vueuse/core'

  useScriptTag('https://js.tappaysdk.com/sdk/tpdirect/v5.18.0', () => {
    window.TPDirect.setupSDK('{TapPay App Id}', "{TapPay App Key}", '{ENV: sandbox | production}')
  })
  useScriptTag('https://pay.google.com/gp/p/js/pay.js', () => {
    // isGooglePaySDKLoaded.value = true
  })
  ```

2. **Setup Google Pay**
設定 Google Pay 相關參數
```ts
window.TPDirect.googlePay.setupGooglePay({
  /**
   * sandbox 模式非必填
   * production 模式必填
   */
  googleMerchantId: '{GooglePay 商家 ID}',
  /**
   * PAN_ONLY: 一般信用卡交易
   * CRYPTOGRAM_3DS: Token 卡交易
   */
  allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  merchantName: '{商店名稱}',
  emailRequired: false, // optional
  shippingAddressRequired: false, // optional,
  billingAddressRequired: false, // optional
  billingAddressFormat: 'MIN', // FULL, MIN

  allowPrepaidCards: true,
  allowedCountryCodes: ['TW'],

  phoneNumberRequired: false, // optional
})
```
- GooglePay 商家 ID 等要部署到正式環境前申請即可

3. **Setup Payment Request**
設定付款金額資訊
並且回傳使用者的瀏覽器是否可以使用 Payment Request API 以及是否有卡片進行付款
```ts
window.TPDirect.googlePay.setupPaymentRequest({
  allowedNetworks: ['JCB', 'MASTERCARD', 'VISA'],
  price: '100.00',
  currency: 'TWD',
}, (err: any, result: { canUseGooglePay: boolean }) => {
  if (!result.canUseGooglePay) {
    // 使用者的瀏覽器無法使用 Payment Request API 或是沒有卡能片進行付款
    return
  }
  // ready for get prime
})
```

4. **Get Prime**

有兩種方式 get prime
- **用 Google Pay Button + callback**
```ts
window.TPDirect.googlePay.setupGooglePayButton({
  el: '{dom selector}',
  color: 'white',
  type: 'short',
  getPrimeCallback(err: any, prime: string) {
    // 呼叫 API 付款 (pay-by-prime)
  },
})
```

- **用自定義的 Button + getPrime**

```ts
 window.TPDirect.googlePay.getPrime((err: { status: number; msg: string; originalError: Error }, prime: string) => {
    if (err) {
      new Error(`get prime by google pay failed: ${err.msg} | ${err.originalError.message}`)
    }
    // call api pay-by-prime
  })
```

## 藍新金流

(前略)總之變成了要改串藍新金流

### 設定
上線前不太需要設定什麼
準備好藍新的商家ID, HashKey, HashIV 就能在 Sandbox 環境走完付款流程
使用 typescript 的專案推薦安裝 `@types/googlepay`

### 串接
可直接參考 [Google Pay 完整實作範例](https://developers.google.com/pay/api/web/guides/tutorial?hl=zh-tw#full-example)

1. **引入 Google Pay SDK**
```js
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://pay.google.com/gp/p/js/pay.js', () => {
  // continue
})
```

2. **Setup & Get Token**
```ts

function getGooglePaymentDataRequest(): google.payments.api.PaymentDataRequest {
  return {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [{
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['JCB', 'MASTERCARD', 'VISA'],
        billingAddressRequired: false,
        billingAddressParameters: {
          phoneNumberRequired: true,
          format: 'FULL',
        },
      },
      tokenizationSpecification: {
        /**
         * PAYMENT_GATEWAY 第三方金流供應商 (藍新)
         */
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'newebpay', // 固定值 newebpay 
          gatewayMerchantId: '{藍新商家 ID}',
        },
      },
    }],
    transactionInfo: {
      currencyCode: 'TWD',
      /**
       * "NOT_CURRENTLY_KNOWN" | "ESTIMATED" | "FINAL"
       * FINAL 表示交易的最終金額
       */
      totalPriceStatus: 'FINAL',
      // set to cart total
      totalPrice: options.value.amount.toFixed(2),
    },
    merchantInfo: {
      merchantName: '{商家名稱}',
      /**
       * TEST 模式非必填
       * PRODUCTION 模式必填
       */
      merchantId: '{GooglePay 商家 ID}',
    },
  }
}

const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' }) // 'TEST' | 'PRODUCTION'

const paymentDataRequest = getGooglePaymentDataRequest()
const response = await paymentsClient.isReadyToPay(paymentDataRequest)

if (!response.result) {
  /**
   * 無法使用 Google Pay
   * 可能是瀏覽器不支援或是使用者沒有可支援付款的卡片
   */
  return 
}
const button = paymentsClient.createButton({
  onClick() { 
      try {
        const paymentDataRequest = getGooglePaymentDataRequest()
        const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest)
        // 呼叫 API 付款
        // 藍新的幕後付款需要的 ANDROIDPAY 就是 paymentData.paymentMethodData.tokenizationData.token
        // 需注意與 Apple Pay 不同， token 已經是 string，直接傳遞即可
      } catch (error) {
        console.error(error)
        // onPaymentFailed
      }
  },
  buttonRadius: 8,
  buttonType: 'pay',
  buttonSizeMode: 'fill',
})
document.querySelector('{dom selector}')?.appendChild(button)

```

## 部署到正式環境

1. 到 [Google Pay & Wallet Console](https://pay.google.com/business/console) 的 Google Pay API 整合服務

2. 新增一個商家，取得 GooglePay 商家 ID
頁面右上這個就是 Merchant ID
<img src="https://imgur.com/KKJaC1b.png" data-action="zoom" />

3. Google Pay API > Integrate with your website > Add website
<img src="https://imgur.com/DxdYbXF.png" data-action="zoom" />

<img src="https://imgur.com/6SpVWEj.png" data-action="zoom" />

1. 正式環境的網域

2. 整合類型選「閘道」

3. 將付款的流程截圖上傳
  可參考 Google 提供的[截圖範例](https://developers.google.com/pay/api/web/guides/brand-guidelines?hl=zh-tw#put-it-all-together)
    - 選擇購買項目/商品的畫面 (ex: 商品頁)
    - 準備付款的畫面 (ex: 購物車)
    - 選擇付款方式的畫面
      當使用者選擇 Google Pay
    - Google Pay 付款資訊的畫面
      Android 裝置此時不允許截圖，必須用其他裝置拍攝（天才一下）
    - 付款成功的畫面

## Google Pay Button
必須嚴格遵守[品牌規範](https://developers.google.com/pay/api/web/guides/brand-guidelines?hl=zh-tw)
建議就直接用 Google Pay 的 Create Button，也有一些可以[客製化的選項](https://developers.google.com/pay/api/web/guides/resources/customize?hl=zh-tw)
選擇付款方式的 Google Pay 標誌也需要注意是否符合品牌規範
（還真的因為標誌沒有外框被審核打槍一次🫠）

## Google Pay on Webview
雖然 Google Pay 開發跟測試上都相對 Apple Pay 容易
用 Chrome, Edge, Safari 都可以使用 Google Pay

但在 Webview (ex: Line Webview、LIFF) 內使用 Google Pay 卻遇到問題
在 Webview 按下 Google Pay 按鈕後無法另開視窗，會變成跳轉頁面導致錯誤
因此需判斷如果是 webview 必須開啟外部瀏覽器才能進行付款
甚至連 Pixel 都無法順利（反觀 iPhone 就能順利呼叫 Apple Pay 😏

<div class="text-xs">google pay in Line webview</div>
<img src="https://imgur.com/UC0YAvL.png" class="w-96" data-action="zoom" />


## 參考資料
- [TapPay 文件 - Google Pay](https://docs.tappaysdk.com/google-pay/zh/home.html#home)
- [TapPay Web Example](https://github.com/TapPay/tappay-web-example)
- [Google Pay on Web 串接 | 院長的系統開發大小事](https://ianwu.tw/press/programming/third_party/integrate_google_pay_on_web.html)
- [Google Pay 文件 - Web](https://developers.google.com/pay/api/web/overview?hl=zh-tw)