<template>
  <div>
    <script
      src="https://utteranc.es/client.js"
      type="text/javascript"
      async
      label="Utterances"
      issue-term="title"
      :theme="theme"
      repo="clipwww/blog"
      crossorigin="anonymous"
    ></script>
  </div>
</template>

<script>
export default {
  props: {
		theme: {
			type: String,
			default: 'github-dark'
		}
	}
};
</script>

<style>
/* .utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-left: 0;
}

.utterances-frame {
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
} */
</style>