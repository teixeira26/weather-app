import React, { useEffect, useState } from "react";
import '../css/home.css'
import { Profile } from "./profile";
import Lottie from 'react-lottie';
import miPrimerAnimacion from "./assets/18123-developer.json";
import searchAnimation from "./assets/search.json";
import thinking from "./assets/thinking.json"
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSettings:{
        preserveAspectRatio:'xMidVMid slice'
    }
}
function Home(){
    return(
        <div>
        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">Weather Whats-App</h1>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Saber más</a>
                </div>
            </div>
        </header>
        <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><Lottie options={{animationData:miPrimerAnimacion, ...defaultOptions}}/></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">¿ Como funciona la app ?</h2>
                            <p>Weather WhatsApp es una app que te permite recibir informaciones sobre el clima de diferentes ciudades en el horario que vos quieras directamente desde tu whats \o/ </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><Lottie options={{animationData:searchAnimation, ...defaultOptions}}/></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">¿ Por que utilizar la APP ?</h2>
                            <p>Pareciera que el sistema de recompensas variables íntrínseco a cualquier relación social está presente en WhatsApp y por esto la app es una de las primeras cosas vistas por miles de ojos humanos alrededor de todo el globo durante todas las mañanas, esto hace de la aplicación un excelente lugar para recibir recordatorios </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5">
                            <Lottie options={{animationData:thinking, ...defaultOptions}}/>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Pequeño desahogo</h2>
                            <p>En realidad la aplicación fue creada para aprender y poner en práctica nuevas tecnologías, en un principio quería efectuar algunas pocas mejoras en una SPA(single page application) que hice durante el bootcamp de SoyHenry, inicialmente la página consultaba a una api externa mediante el ingreso de un nombre en un input y con base en la información recibida creaba algunas cards, a medida en que la fuí haciendo me surgieron nuevas ideas y al final surgió esta quimera. Espero que te guste XD</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer class="py-5 bg-black">
            <div class="container px-5"><p class="m-0 text-center text-white small">Copyright - no hay copy XD &copy; Matheus Oliveira Teixeira</p></div>
        </footer>
        {/* <Profile></Profile> */}
        </div>
        
    )
}

export default Home;
