---
title: Apple Pay on Web
summary: TapPay & 藍新金流
date: 2024-08-05
tags: 
  - JavaScript
  - Apple Pay
---

公司的專案要加上支付 (信用卡, Apple Pay, Google Pay)
中間還經歷了從串 TapPay 換到串藍新 🫠
趁還有記憶時紀錄一下，也許對未來的自己會有幫助 😂 

## TapPay
### 設定
TapPay 的 Apple Pay on Web 不需要自己申請 Apple Pay 開發者帳號
讓整個設定流程變得非常簡單 
可參考 [TapPay 的文件](https://docs.tappaysdk.com/apple-pay/zh/portal.html#apple-pay-on-the-web-merchant-setting)

- https 的網域
  - 可以用 ngrok，但免費版的有 request 數限制
- 登入 TapPay Portal > 支付管理 > Apple Pay On The Web
  ![image](https://hackmd.io/_uploads/HyENQAatC.png)

網域驗證完獲得商家識別碼就準備就緒了

### 串接
可直接參考 [TapPay Web Example - Apple Pay](https://github.com/TapPay/tappay-web-example/tree/master/Apple_Pay)

1. **引入 TapPay SDK**
  ```js
  import {  useScriptTag } from '@vueuse/core'

  useScriptTag('https://js.tappaysdk.com/sdk/tpdirect/v5.18.0', () => {
    window.TPDirect.setupSDK('{TapPay App Id}', "{TapPay App Key}", '{ENV: sandbox | production}')
  })
  ```

2. **Setup Apple Pay**

可以先檢查瀏覽器是否可以使用 Payment Request API

```js
if (window.TPDirect.paymentRequestApi.checkAvailability()) {
  // continue
}
```

setup
```js
window.TPDirect.paymentRequestApi.setupApplePay({
  merchantIdentifier: '{商店識別碼}',
  // defaults to 'TW'
  countryCode: 'TW',
})
```

3. **Setup Payment Request**
```ts
window.TPDirect.paymentRequestApi.setupPaymentRequest({
  supportedNetworks: ['MASTERCARD', 'VISA', 'AMEX', 'JCB'],
  supportedMethods: ['apple_pay'],
  displayItems: options.value.items?.filter(item => item.price > 0).map(item => ({
    label: "{品項名稱}",
    amount: {
      currency: "TWD",
      value: "100.00",
    },
  })),
  total: {
    label: "{付給 XXX}",
    amount: {
      currency: "TWD",
      value: "100.00",
    },
  },
  /** 送貨相關資訊 */
  shippingOptions: [],
  options: {
    requestPayerEmail: false,
    requestPayerName: false,
    requestPayerPhone: false,
    requestShipping: false,
    // https://docs.tappaysdk.com/payment-request-api/zh/reference.html#shippingtype
    // shippingType: 'shipping'
  }
}, (result: { browserSupportPaymentRequest: boolean; canMakePaymentWithActiveCard: boolean }) => {
  // ready for get prime 💪
})
```
- `browserSupportPaymentRequest` 代表瀏覽器支援 Payment Request API
- `canMakePaymentWithActiveCard` 代表使用者有可以支付的卡片


4. **Get Prime**

完成 setup 後就可以呼叫 get prime 跳出原生的 Apple Pay 付款驗證
驗證成功就會拿到 prime，接著就可以教給後端進行付款（Pay by Prime API） 
```ts
window.TPDirect.paymentRequestApi.getPrime((result: RequestApiGetPrimeResult) => {
  if (result.status !== 0) {
    new Error(`get prime by apple pay failed: ${result.msg}`)
  }
  console.log(result.prime)
})
```
RequestApiGetPrimeResult 的內容可參考 [Get Prime Result](https://docs.tappaysdk.com/payment-request-api/zh/front.html#get-prime-result)

### 補充
#### Apple Pay 流程上需要注意
  呼叫 getPrime 必須要由使用者的操作行為來觸發 (ex: click event)
  一開始設計的流程是

  1. 使用者按下 「Pay」
  2. 呼叫 API 建立訂單
  3. 呼叫 setupPaymentRequest 建立 Apple Pay 付款資訊
  4. 呼叫 getPrime
  5. 呼叫 API 付款

  結果 step 4 就噴出了錯誤訊息「**Must create a new ApplePaySession from a user gesture handler**」
  google & 問 gpt 後才搞清楚原來必須是透過使用者的操作後直接的呼叫 getPrime
  做了一些嘗試後得到結論是，中間不能參雜 http request
  也不能 click -> setupPaymentRequest -> getPrime
  必須要是 click -> getPrime
  雖然不清楚 apple 怎麼判斷的

  且 apple pay, google pay 都有對使用者按下的付款按鈕有樣式規範
  因此後來統一將 web 的支付流程調整為

  1. 使用者按下 「Pay」
  2. 呼叫 API 建立訂單
  3. 呼叫 setupPaymentRequest 建立 Apple Pay 付款資訊
  4. 下個畫面，顯示符合 Apple Pay 樣式規範的按鈕
  5. 使用者按下按鈕 getPrime
  6. 呼叫 API 付款

  終於順利取得 Prime 能付款成功 🎉

#### 啟用正式環境服務 
最後並沒有走到這 🫠
不過 [TapPay 的文件](https://docs.tappaysdk.com/apple-pay/zh/portal.html#apple-pay-on-the-web-merchant-setting)一樣有寫，可以參考

## 藍新金流

(前略)總之變成了要改串藍新金流

### 設定
- Apple 開發者帳號
- https 網域
- 憑證檔

事前的準備不是我處理的，無法紀錄 🤣
但應該是整個串接中最麻煩的步驟
可參考[藍新文件](https://cwww.newebpay.com/dw_files/Neweb_Applepayredme_20220622.pdf)

我只負責拿到可以用的 merchantId, 憑證檔 & domain 後串接 🙈

### 串接

1. **檢查是否可使用 Apple Pay**
```ts
if (window.ApplePaySession 
  && await window.ApplePaySession.canMakePaymentsWithActiveCard('{merchantIdentifier}') 
  && window.ApplePaySession.canMakePayments()) {
  // just do it 
}
```
- `window.ApplePaySession.canMakePaymentsWithActiveCard` 是否有可以支付的卡片
- `window.ApplePaySession.canMakePayments` 裝置是否支援 Apple Pay

2. **建立 Apple Pay 付款資訊 & 驗證 Merchant**
#### 建立 Apple Pay Session
```ts
const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
  countryCode: 'TW',
  currencyCode: 'TWD',
  supportedNetworks: ['visa', 'masterCard', 'jcb'],
  merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
  total: {
    label: '{付給 XXX}',
    amount: '100.00',
  },
  lineItems: [], // optional 品項名稱 & 金額
  requiredBillingContactFields: ['email', 'name', 'phone'],
  requiredShippingContactFields: [],
  shippingMethods: [],
}

const session = new window.ApplePaySession(14, paymentRequest)

session.begin()
```
[supportedNetworks 支援的項目與相應的 version 可參考](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916122-supportednetworks#discussion)
雖然只打算使用三大發卡組織的卡，但 version 還是直接無腦用當下最新的 14 🙈

接著是整個串接中第二麻煩的部分
驗證 Merchant
也就是 Apple Pay 原生視窗剛彈出時在轉圈圈的部分
這時會觸發 `onvalidatemerchant` 拿到 validationURL
將 validationURL, merchantIdentifier & displayName 一同交給 API Server
由 API Server 向 Apple 發 request 驗證

#### 實作 onvalidatemerchant Client
```ts
session.onvalidatemerchant = async (event) => {
  const validationURL = event.validationURL
  const { data: ret } = await axios.post('/ap-session', {
    validationURL,
    displayName: '{顯示的商店名稱，可以中文}',
  }, {
    headers: {
      'x-mid': '{merchantIdentifier}',
    },
  })

  if (ret.code !== 0) {
    /** 失敗 -> 關閉 session */
    session.abort()
    return
  }
  /** 成功 -> 將 Apple 回傳的結果用於完成驗證 */
  session.completeMerchantValidation(ret.response)
}
```

#### 實作 onvalidatemerchant Server
```ts
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { Agent } from 'https'
import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.post('/ap-session', async (req, res) => {
  try {
    const { validationURL, displayName } = req.body
    const merchantIdentifier = req.headers['x-mid'].toString()
    const httpsAgent = new Agent({
      cert: readFileSync(resolve(__dirname, './sandbox/merchant_id_cert.pem')),
      key: readFileSync(resolve(__dirname, './sandbox/merchant_id.key')),
    })

    const { data } = await axios.post(validationURL, {
      merchantIdentifier,
      displayName,
      initiative: 'web', // 固定帶 web
      initiativeContext: req.hostname,
    }, { httpsAgent })

    return res.status(200).json({
      code: 0,
      response: data,
    })
  } catch (error) {
    return res.status(400).json({
      code: 99,
      message: error.message,
    })
  }
})
```
Axios 需要設定 httpsAgent
把從藍新那拿到的憑證檔案附上去
> 藍新給了很多憑證檔案，認真說沒搞清楚是要帶哪一組，就一直 try 到可以過為止🥹

驗證成功後原生 Apple Pay 視窗就會變成等待 Face/Touch ID
Face/Touch ID 驗證成功就會觸發 `onpaymentauthorized` 取得付款需要的 token
如果使用者關閉 Apple Pay 則會觸發 `oncancel`
```ts
session.onpaymentauthorized = (event) => {
  session.completePayment(window.ApplePaySession.STATUS_SUCCESS)
  // 呼叫 API 付款
}

session.oncancel = (event) => {
  console.log(event)
}
```
> 藍新的幕後付款需要的 `APPLEPAY` 就是 `event.payment.token.paymentData`
> 需注意這是一個 `object`，需要自己 stringify 過再交給藍新 API

### 補充
#### Apple Pay 流程上需要注意
在串 TapPay 時已經改過流程
所以改串藍新並沒有在踩到這個雷
但應該也是使用者 click -> new ApplePaySession -> session.begin()
中間不得穿插其他 http request 或其他操作

#### 啟用正式環境服務 
正式環境用正式環境對應的 merchantIdentifier, 憑證 & Domain 即可
沒有其他額外的審核了 🎊

## Apple Pay Button
Apple Pay 的按鈕是有[樣式規範](https://developer.apple.com/design/human-interface-guidelines/apple-pay)的
最簡單的方法是可以直接用 Apple Pay SDK 來產生按鈕，但需要支援 Web Component
可參考 [Apple Pay JS API](https://applepaydemo.apple.com/) 的 Display an Apple Pay button

參照著範例刻一個出來也很快
或是直接用 [Apple 提供的 CSS](https://developer.apple.com/documentation/apple_pay_on_the_web/displaying_apple_pay_buttons_using_css)

## Apple Pay on Webview

Apple Pay 在 Line Webview、LIFF (LINE Front-end Framework) 內都可以順利使用 

反觀 Google Pay 在 Webview 連 Pixel 都叫不出原生視窗🥹
必須要讓使用者開啟外部瀏覽器才能進行付款