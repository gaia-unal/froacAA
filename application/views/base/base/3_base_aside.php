      <!--sidebar start-->
      <aside >
          <div id="sidebar"  class="nav-collapse" role="navigation" aria-label="Barra de navegación FROAC">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">

                <li id="accessibilityNav">
                    <a href="#">
                  <i class="icon-info"></i>
                        Accesibilidad<span class="dcjq-icon"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a>
                                <label id="fontSizeLabel" for="fontSizeNav">Cambiar Fuente</label>
                                <br>
                                <input style="color: #555;" type="number" name="fontSizeNav" id="fontSizeNav" aria-labelledby="fontSizeLabel" class="fontSize" min="8" max="40">
                            </a>
                        </li>
                        <li>
                            <a>
                                <label id="interlineLabel" for="interlineNav">Cambiar Interlineado</label>
                                <br>
                                <input style="color: #555;" type="number" name="interlineNav" id="interlineNav" aria-labelledby="interlineLabel" class="interline" min="10" max="40">
                            </a>
                        </li>
        <!--li>
            <a><label id="increaseInterline" for="">Aumentar Interlineado</label></a>
        </li>
        <li>
            <a><label id="decreaseInterline" for="">Disminuir Interlineado</label></a>
        </li-->
        <li>
            <a><label id="label_contrast" for="contrastNav">Contraste</label>
                <select class="form-control" aria-selected="true" id="contrastNav" aria-labelledby="label_contrast" name="contrast" role="listbox">
                    <option value="">Normal</option>
                    <option value="highContrast1">Negro - Blanco</option>
                    <option value="highContrast2">Amarillo - Negro</option>
                    <option value="highContrast3">Azul - Naranja</option>
                </select>
            </a>
        </li>
        <li>
            <a><label id="label_font" for="fontNav">Fuente</label>
                <select class="form-control" aria-selected="true" id="fontNav" aria-labelledby="label_font" name="font" role="listbox">
                    <option value="">Normal</option>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Courier">Courier</option>
                    <option value="monospace">Monospace</option>
                    <option value="Serif">Serif</option>
                    <option value="Comic Sans MS">Comic Sans</option>
                </select>
            </a>
        </li>
    </ul>
    <!-- /.nav-second-level -->
</li>



                  <li>
                      <a href="<?php echo base_url()?>usuario/registro" >
                          <i class="icon-user"></i>
                          <span>Crear una cuenta</span>
                      </a>
                  </li>

                  <li>
                      <a  href="<?php echo base_url()?>">
                          <i class="icon-search"></i>
                          <span>Buscador</span>
                      </a>
                  </li>

                  <li>
                      <a href="<?php echo base_url()?>repositorio/lista" >
                          <i class="icon-sitemap"></i>
                          <span>Repositorios</span>
                      </a>
                  </li>



               <!--   <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="icon-cogs"></i>
                          <span>Aplicaciones</span>
                      </a>

                  </li>

                  <li>
                      <a href="javascript:;" >
                          <i class="icon-comment"></i>
                          <span>Blog</span>
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;" >
                          <i class="icon-rss"></i>
                          <span>Noticias</span>
                      </a>
                  </li>-->
                  <li>
                      <a href="<?php echo base_url()?>usuario/equipo" >
                          <i class="icon-info"></i>
                          <span>Equipo FROAC</span>
                      </a>
                  </li>
                  <li>
                      <a href="<?php echo base_url()?>usuario/acerca" >
                          <i class="icon-info"></i>
                          <span>Acerca de</span>
                      </a>
                  </li>
                  <li>
                      <a href="<?php echo base_url()?>usuario/glosario" >
                          <i class="icon-info"></i>
                          <span>Glosario</span>
                      </a>
                  </li>
                  <li>
                      <a href="http://froac.manizales.unal.edu.co/GAIA/" >
                          <i class="icon-info"></i>
                          <span>GAIA</span>
                      </a>
                  </li>
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>



      <!--sidebar end-->
