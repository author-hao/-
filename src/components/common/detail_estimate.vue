<template>
  <div class="estimate">
      <p>还没有评价</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@function rem($px) {
  @return $px / 67.5 + rem;
}
  .estimate {
      width: 100%;

  }
 .estimate p {
          width: 100%;
          line-height: rem(300);
          font-size: rem(40);
          text-align: center;
      }
</style>
