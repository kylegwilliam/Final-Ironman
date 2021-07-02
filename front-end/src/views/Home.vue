<template>
  <div>

    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col><img src="@/assets/Bike.jpg"></b-col>
        <b-col>
          <b-card
            title="Welcome to Triathlon Trainning"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              This website is a help to anyone trying to complete their triathlon fitness goal. With a helpful comunity, fitness tracker, as well as a user freindly envornment, everyone can benifit and achieve their goals!
            </b-card-text>

          </b-card>

        </b-col>
        <b-col><img src="@/assets/Run.jpg"></b-col>
      </b-row>
    </b-container>


    <div>
      <div>
</div>

    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>

img {
  max-width: 300%;
  height: auto;
}
</style>
