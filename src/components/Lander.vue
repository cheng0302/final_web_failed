<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="https://upload.cc/i1/2021/01/23/7bPTum.jpg">
                <h1>Freelancer & Designer</h1>
                <p>This is a easy protfolio for my projects</p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
            <p>Entre to Find Out Who am I</p>
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://upload.cc/i1/2021/01/23/YyreVD.jpg">
                                    <h2>Design Projects</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        I have engaged in the design affairs for about 3 years.
                                        Although my projects are not perfect enough, those are my learning track.
                                        In this page, I will present the illustration, card design, cover design, etc.      
                                        Come and see what I have done so far.
                                    </p>
                                    <!-- <router-link class=“btn 3” to=“/DesignProjects”>More</router-link>                                 -->
                                    <button type="button" class="btn 1" onclick="to(/DesignProjects)">More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="https://upload.cc/i1/2021/01/23/3JbTic.png">
                                    <h2>VR Projects</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Here I am presenting is a webVR project, which uses HTML to create a interacted scene.
                                        In the VR scene, I used Maya to build the models and inserted them into the website.
                                        It just a draft and concept, but I think it was delicated and cool.
                                    </p>
                                    <button type="button" class="btn 2">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="https://upload.cc/i1/2021/01/23/ynFhsC.png">
                                <h2>On-going Projects</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    Besides the VR project, I am participating in different form of creation.
                                    For example, Audio-Visualization use Touchdesigner to transfer the sound or music in to a generate graphic;
                                    BioArt as will as Suspective Design are what I am exploring recently.
                                </p>
                                <button type="button" class="btn 3" onclick="javascript:location.href='../views/On-going Projects.vue'">More</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- modal for contact -->
        
        <section class="contact">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>       
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    }  
}
</script>

<style lang="css" scoped>

    .rounded-circle{
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }

    .card-body{
        text-align:justify
    }

    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        word-spacing: 2px;
        letter-spacing: 2px;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }

</style>