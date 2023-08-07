<template>
<header>
<!-- <h1>{{title}}</h1>
<Button text="Add Taskss" color="green"/> -->
<nav class="relative container mx-auto p-6 flex">

              <div class="flex items-center justify-between">
                <div class="pt-2">
                  <img src="./components/img/logo.svg" class="font-4xl w-34" alt="">
                </div>
              </div>
           
              <!-- <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a> -->
           <div class="flex flex-1 space-x-9">
            <a href="" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize" >
                technology
              </h6>
              <p class="font-normal text-gray-700 dark:text-gray-400">biggest enterpris enterpris enterpris</p>
            </a>
            <a href="" class="rounded-lg bg-white-400 border border-gray-300 mx-w-sm p-6">

              <h6 class=" text-2xl font-bold tracking-tighter hover:text-red-300 capitalize" >
                technology
              </h6>
              <p class="mt-2 font-sans font-normal">biggest enterpris enterpris enterpris</p>
              
            </a>
           </div>
           <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
              <div class="container ml-5">
                <div class="m-20 text-red-200">
                 <a href="">Hompages</a>
                  <a href="">Hompages</a>
                  <a href="">Hompages</a>
                  <a href="">Hompages</a>
                </div>   
               </div>
              
                </nav>

</header>
</template>
<script>
                import Button from'./Button.vue'
                import Navbar from'./Navbar.vue'
export default {
                name:' Header',
                props:{
                                title:String,
                },
                components:{
                                Button,
                                Navbar
                }
}
</script>
<style scoped>


</style>