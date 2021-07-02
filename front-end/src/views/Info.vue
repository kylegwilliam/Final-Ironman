<template>
  <div>
    <b-container class="bv-example-row">
      <h2>Trainning for a Traitahlon is HARD! No matter how you slice it!</h2>
      <b-row>
        <b-col><img src="@/assets/4.jpg"></b-col>
        <b-col><img src="@/assets/7.jpg"></b-col>
        <b-col><img src="@/assets/9.jpg"></b-col>
        <!--
        <b-col><img src="@/assets/11.jpg"></b-col>
        <b-col><img src="@/assets/20.jpg"></b-col>
      -->
      </b-row>
      <p></p>
      <p>Running, swimming, and biking isn't alwasy that fun. Its hard to be consistant</p>
      <h1>Thats why were here!</h1>
      <p>This website will help you acomplish your Triathlon goals! Anyone doing their frist sprint Triathlon all the way up to competativly running an Ironman can benifit.</p>

      <div>

        <b-row>
          <b-col>
            <b-button v-b-modal.modal-1>Goals of this website</b-button>

            <b-modal id="modal-1" title="Goals of this Website">

                <p> - Allow you to connect with a supporive group of people trainning for an upcoming triathlons</p>
                <p> - Look up past trainning times</p>
                <p> - Allows you to track daily workouts</p>

            </b-modal>

          </b-col>


          <b-col>
            <b-button v-b-modal.modal-2>What are the next steps?</b-button>

            <b-modal id="modal-2" title="Next steps!">
              <p>What are you waiting for? The next thing to do would be to create an account! </p>
            </b-modal>

          </b-col>


          <b-col>
            <b-button v-b-modal.modal-3>About the Web Developer</b-button>

            <b-modal id="modal-3" title="Creator: Kyle Gwilliam">
              <p class="my-4">Created by Kyle Gwilliam</p>
              <p>For his CS260 class at BYU</p>
            </b-modal>

          </b-col>

          <!--
          <b-col><img src="@/assets/11.jpg"></b-col>
          <b-col><img src="@/assets/20.jpg"></b-col>
        -->
        </b-row>

      </div>

    </b-container>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

img {
  max-width: 115%;
  height: auto;
}
</style>

<!-- Make a class for the image size. Style of pictures.
-->
