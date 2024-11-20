

  $('#hornav').html(`
    <div class="container no-padding border-bottom">
        <div class="row">
            <div class="col-md-8 no-padding">
                <div class="visible-lg">
                    <ul id="hornavmenu" class="nav navbar-nav">
                        <li>
                            <a href="index.html" class="fa-home active">Home</a>
                        </li>
                        <li>
                            <span class="fa-gears ">Cuidados de Pele</span>
                            <ul>
                                <li class="parent">
                                    <span>Tipo de Pele</span>
                                    <ul>
                                        <li>
                                            <a href="cuidPele_oleosa.html">Pele Oleosa</a>
                                        </li>
                                        <li>
                                            <a href="cuidPele_seca.html">Pele Seca</a>
                                        </li>
                                        <li>
                                            <a href="cuidPele_mista.html">Pele Mista</a>
                                        </li>
                                        <li>
                                            <a href="cuidPele_sensivel.html">Pele Sensível</a>
                                        </li>
                                        <li>
                                            <a href="cuidPele_atopica.html">Pele Atópica</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="parent">
                                    <span>Condições Especificas</span>
                                    <ul>
                                        <li>
                                            <a href="CE_Acne.html">Acne</a>
                                        </li>
                                        <li>
                                            <a href="CE_Rosacea.html">Rosácea</a>
                                        </li>
                                        <li>
                                            <a href="CE_hiper.html">Hiperpigmentação</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="parent">
                                    <span>Necessidades Especificas</span>
                                    <ul>
                                        <li>
                                            <a href="NE_Grav.html">Grávidas</a>
                                        </li>
                                        <li>
                                            <a href="NE_crianca.html">Crianças</a>
                                        </li>
                                        <li>
                                            <a href="NE_Madura.html">Pele Madura</a>
                                        </li>
                                        <li>
                                            <a href="NE_PTratamento.html">Pele Pós-Tratamento</a>
                                        </li>
                                        <li>
                                            <a href="NE_Vegan.html">Produtos Vegan</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li id="quiz-section">
                            <span class="fa-th "> QUIZ</span>
                            <ul>
                                <li><a href="quiz.html">QUIZZ PARA DESCOBRIR O TIPO DE PELE</a></li>
                            </ul>
                        </li>
                        <li id="blog-section">
                            <span class="fa-font ">Blog</span>
                            <ul>
                                <li><a href="blog-list.html">Blog</a></li>
                                <li><a href="blog-single.html">Blog Single Item</a></li>
                            </ul>
                        </li>
                        <li id="produtos-section">
                            <a href="produtos.html" class="fa-comment ">Produtos</a>
                        </li>
                        <li id="pages-login">
                        <span class="fa-copy ">Pages</span>
                        <ul>
                            <li><a href="pages-about-us.html">About Us</a></li>
                            <li id="pages-login-link"><a href="pages-login.html">Login</a></li>
                            <li id="pages-logout-link"><a href="#" onclick="FazerLogout()">Logout</a></li>
                            <li id="pages-sign-up"><a href="pages-sign-up.html">Sign-Up</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 no-padding">
                <ul class="social-icons pull-right">
                    
                    <li class="social-linkedin">
                        <a href="#" target="_blank" title="Linkedin"></a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>
`);