<div class="page-content d-flex align-items-stretch">
    <!-- Side Navbar -->
    <nav class="side-navbar">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center">

        </div>
        <ul class="list-unstyled">
            <li id="searchOA" class="auto-translate"><a href="<?php echo base_url() ?>" > <i class="fa fa-search"></i><?php echo $this->lang->line('search'); ?></a></li>
            <?php if (!$this->session->userdata('logged_in')) : ?>
                <li id="create-account" class="auto-translate"><a href="<?php echo base_url() ?>usuario/registro" class="need-confirmation" data-allyxe-confirm="¿Seguir a registro?"> <i class="fa fa-user"></i><?php echo $this->lang->line('signup'); ?> </a></li>
            <?php endif; ?>
            <li id="repos" class="auto-translate"><a href="<?php echo base_url() ?>repositorio/lista"  class="need-confirmation" data-allyxe-confirm="¿Seguir a repositorios?"> <i class="fa fa-sitemap"></i><?php echo $this->lang->line('repositories'); ?></a></li>
            <li id="teamFROAC" class="auto-translate"><a href="<?php echo base_url() ?>usuario/equipo" class="need-confirmation" data-allyxe-confirm="¿Seguir a equipo?"> <i class="fa fa-users"></i><?php echo $this->lang->line('team'); ?></a></li>
            <li id="aboutFROAC" class="auto-translate"><a href="<?php echo base_url() ?>usuario/acerca" class="need-confirmation" data-allyxe-confirm="¿Seguir a acerca de?"> <i class="fa fa-info-circle"></i><?php echo $this->lang->line('about'); ?></a></li>
            <li id="glossary" class="auto-translate"><a href="<?php echo base_url() ?>usuario/glosario" class="need-confirmation" data-allyxe-confirm="¿Seguir a glosario?"> <i class="fa fa-book"></i><?php echo $this->lang->line('glossary'); ?></a></li>
            <li><a href="http://froac.manizales.unal.edu.co/GAIA/" class="auto-translate" class="need-confirmation" data-allyxe-confirm="¿Ir a GAIA?"> <i class="fa fa-globe"></i>GAIA</a></li>
        </ul>

    </nav>