<!-- 导航页面 -->
<template>
  <div>
    <Button>Default</Button>
    <Button type="primary" @click.native="textButton">Primary</Button>
    <Button type="dashed" @click.native="textButtons">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
import text from '../../../api/text';

export default {
  created() { },
  mounted() { },
  computed: {},
  components: {},
  data() {
    return {
    };
  },
  methods: {
    textButton() {
      text.text(123).then((res) => {
        console.log(222)
        console.log('res', res)
      }).catch((err) => {
        console.log('err', err)
      })
      text.text(456).then((data) => {
        console.log(333)
        console.log('data', data)
      })
      console.log(66666)
    },
    textButtons() {
      console.log(222)
      text.text2(123).then((res) => {
        console.log('res', res)
      })
    }
  },
};
</script>

<style scoped>
</style>
