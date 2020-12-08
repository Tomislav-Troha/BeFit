<template>

    <footer class="tomo mx-3  ">

  
  <div class="container-fluid mt-5">

    

      
      
      

      

   
      <div class="text-center mt-5 ml-5">
            <a href="#" class="fb-ic" ><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="#" class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a href="#" class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
          </div>
     <h3 class="mb-3">BeFit @tim3</h3>
   

    </div>

</footer>


</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {

        }
    }
}
</script>

<style scoped>




.container-fluid{
  color: #2c3e50;
  background-color: #c4c4c4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
   min-height: 150px;
   flex-grow: 1;
}

body, div#page {  /* Will not work on IE if body is ommitted */
   display: flex;
   flex-direction: column;
   min-height: 100vh;
 }

 div#content {
   flex-grow: 1;
 }


</style>