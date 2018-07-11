<!DOCTYPE html>
<html lang="es" style="font-size:12px">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="FlatLab, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    <link rel="shortcut icon" href="img/favicon.png">
    <link href="<?php echo base_url() ?>/asset/img/frog1.png" rel="icon" />
    <title>FROAC</title>
    <!-- Bootstrap core CSS -->
    <link href="<?php echo base_url() ?>asset/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>asset/css/bootstrap-reset.css" rel="stylesheet">

    <!--external css-->
    <link href="<?php echo base_url() ?>asset/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="<?php echo base_url() ?>asset/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php echo base_url() ?>asset/css/owl.carousel.css" type="text/css">
    <!-- Custom styles for this template -->
    <link href="<?php echo base_url() ?>asset/css/style.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>asset/css/style-responsive.css" rel="stylesheet" />
    <link href="<?php echo base_url() ?>asset/css/open-iconic-bootstrap.css" rel="stylesheet">
    <script src="<?php echo base_url() ?>asset/js/jquery.js"></script>
    <!--<script src="<?php echo base_url() ?>asset/js/inputSpinner.js"></script>-->

    <style>
        .card {
            min-height: 200px;
            min-width: 200px;
            margin-right: 5px;
        }

        .container-fluid {
            overflow-x: auto;
        }
    </style>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
          <script src="js/html5shiv.js"></script>
          <script src="js/respond.min.js"></script>

        <![endif]-->

</head>

<body>

    <section id="container">
        <div class="collapse container-fluid" id="collapseExample">
            <br/>
            <div class="d-flex flex-row flex-nowrap">
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-center"><span><b>TAMAÑO DE FUENTE</b></span></div>
                    <div class="card-body">
                        <p>Cambiar el tamaño de la fuente.</p>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[0]">
                                    <span class="oi oi-minus"></span>
                                </button>
                            </span>
                            <input type="text" name="quant[0]" id="inputFontSize" class="form-control input-number" value="12" min="9" max="36" step="1" data-decimals="0" style="text-align:center">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[0]">
                                    <span class="oi oi-plus"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-center"><span><b>TAMAÑO DE INTERLINEADO</b></span></div>
                    <div class="card-body">
                        <p>Cambiar el tamaño del interlineado.</p>
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                    <span class="oi oi-minus"></span>
                                </button>
                            </span>
                            <input type="text" name="quant[1]" id="inputInterlineSize" class="form-control input-number" value="1.5" min="1" max="2" step="0.1" data-decimals="1" style="text-align:center">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                    <span class="oi oi-plus"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        <script>
            //$("input[type='number']").InputSpinner();
            /*$('#fontSizeNav').change(function(){
                console.log("change");
            });*/

            $('.btn-number').click(function(e) {
                e.preventDefault();
                console.log("ejecuto");

                fieldName = $(this).attr('data-field');
                console.log(fieldName);
                type = $(this).attr('data-type');
                let input = $("input[name='" + fieldName + "']");
                let currentVal = parseFloat(input.val());
                let step = parseFloat(input.attr('step'));
                let dataDecimals = parseFloat(input.attr('data-decimals')) || 0;
                console.log(dataDecimals);
                let newValue = 0;
                let decimals = 10;
                if (!isNaN(currentVal)) {
                    if (type == 'minus') {
                        input.data('tipo', type);
                        if (currentVal > input.attr('min')) {
                            newValue = currentVal - step;
                            decimals *= dataDecimals;
                            console.log(decimals);
                            if(dataDecimals){
                                input.val(Math.round(newValue * decimals) / decimals).change();
                            } else {
                                input.val(newValue).change();
                            }
                        }
                        if (parseFloat(input.val()) == input.attr('min')) {
                            $(this).attr('disabled', true);
                        }


                    } else if (type == 'plus') {
                        input.data('tipo', type);
                        if (currentVal < input.attr('max')) {
                            newValue = currentVal + step;
                            decimals *= dataDecimals;
                            if(dataDecimals){
                                input.val(Math.round(newValue * decimals) / decimals).change();
                            } else {
                                input.val(newValue).change();
                            }
                        }
                        if (parseFloat(input.val()) == input.attr('max')) {
                            $(this).attr('disabled', true);
                        }
                    }
                } else {
                    input.val(0);
                }
            });
            $('.input-number').focusin(function() {
                console.log("segunda");
                $(this).data('oldValue', $(this).val());
            });
            $('.input-number').change(function() {
                console.log("tercera");
                if($(this).attr('data-decimals') != 0){
                    $(this).val(Math.round($(this).val() * (10 * $(this).attr('data-decimals')))/ (10 * $(this).attr('data-decimals')));
                } else if($(this).attr('data-decimals') == 0) {
                    $(this).val(parseInt($(this).val()));
                }
                minValue = parseFloat($(this).attr('min'));
                maxValue = parseFloat($(this).attr('max'));
                valueCurrent = parseFloat($(this).val());
                name = $(this).attr('name');
                if (valueCurrent >= minValue) {
                    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
                } else {
                    //alert('Sorry, the minimum value was reached');
                    $(this).val($(this).data('oldValue'));
                }
                if (valueCurrent <= maxValue) {
                    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
                } else {
                    //alert('Sorry, the maximum value was reached');
                    $(this).val($(this).data('oldValue'));
                }
                console.log($(this));

                changeFontSize('#inputFontSize');
            });
            $(".input-number").keydown(function(e) {
                console.log("cuarta");
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                    // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        </script>
