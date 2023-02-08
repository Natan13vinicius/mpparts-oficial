$(function($){

	$('#submitContato').click(function(e){
		e.preventDefault(); 

		$('#submitContato').text('Carregando...').append('<i class="fa fa-spinner" data-fa-transform="rotate-45"></i>');

		$('#formContato').find(':required').css('border-bottom-color','');

		var cont = 0;
		$('#formContato').find(':required').each(function(){
			if($(this).val() == ""){
				$(this).css('border-bottom-color','red');
				swal('Informações incompletas','Por favor, preencher em destaque!','warning');

				setTimeout(function(){
					$('#submitContato').text('Enviar Mensagem');
				},2000);

				cont++;
			}
		});

		if(cont == 0){

			// var data_save = $(this).serializeArray();
			var data_save = new FormData($('#formContato')[0]);

			$.ajax({
				url:'enviaFormularios.php',
				type:'POST',
				cache : false,
    			processData: false,
    			contentType: false,
				data: data_save,
				success: function(data){

					if(data == 0){
						swal('Erro no envio','Erro ao enviar a mensagem!!','error');
					}else{
						$('#formContato')[0].reset();
						$('#submitContato').text('Mensagem Enviada').append(' <i class="fa fa-thumbs-up"></i>');;
						swal('Sucesso','E-mail enviado com sucesso!','success');
					}
					
				},
				error: function(){
					swal('Erro','Ocorreu um erro!','error');
				},
			});
		}
	
	});

	$('#home').addClass('active');

    // Method 1 - uses 'data-toggle' to initialize
    $('[data-toggle="myToolTip"]').tooltip();   

    /* - - - - - - - - - - - - - - - - - - - */

    // Method 2 - uses the id, class or native tag, could use .btn as class 

    $('button').tooltip();

    // options set in JS by class
    $(".tip-top").tooltip({
        placement : 'top'
    });
    
    $(".tip-top").tooltip({
        placement : 'top'
    });
    $(".tip-right").tooltip({
        placement : 'right'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
    $(".tip-left").tooltip({
        placement : 'left',
        html : true
    });

    $(".tip-auto").tooltip({
        placement : 'auto',
        html : true
    });


    $('.search-bar > a').on('click', function() {
       $('.search-area').toggle(function() {
          $(this).animate({             
          }, 500);
       });
    }); 
    $('.closebtn').on('click', function() {
       $('.search-area').toggle(function() {
          $(this).animate({              
          }, 500);
       });
    });


    $('.data').mask('00/00/0000');
    $('.tempo').mask('00:00:00');
    $('.data_tempo').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.tel').mask('00000-0000');
    $('.ddd_tel').mask('(00) 0000-0000');
    $('.ie').mask('000.000.000');
    $('.cpf').mask('000.000.000-00');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.dinheiro').mask('000.000.000.000.000,00' , { reverse : true});
    $('.dinheiro2').mask("#.##0,00" , { reverse:true});

    $('.cor_hex').mask('#xxxxxx' , {
        translation: {
            'x': {
                pattern: /[a-fA-F0-9]/
            },
            '#' : ''
        }
    });

    $('.placeholder').mask("00/00/0000", {
        placeholder: "__/__/____" 
    }) ;


    $('#unmask').click(function(){
        var unmask_value = $('.cpf').cleanVal();
        $('#clearcpf').html(unmask_value);
    });


    $("#cep").focusout(function(){
        //Início do Comando AJAX
        $.ajax({
            //O campo URL diz o caminho de onde virá os dados
            //É importante concatenar o valor digitado no CEP
            url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
            //Aqui você deve preencher o tipo de dados que será lido,
            //no caso, estamos lendo JSON.
            dataType: 'json',
            //SUCESS é referente a função que será executada caso
            //ele consiga ler a fonte de dados com sucesso.
            //O parâmetro dentro da função se refere ao nome da variável
            //que você vai dar para ler esse objeto.
            success: function(resposta){
                //Agora basta definir os valores que você deseja preencher
                //automaticamente nos campos acima.
                $("#logradouro").val(resposta.logradouro);
                $("#complemento").val(resposta.complemento);
                $("#bairro").val(resposta.bairro);
                $("#cidade").val(resposta.localidade);
                $("#uf").val(resposta.uf);
                //Vamos incluir para que o Número seja focado automaticamente
                //melhorando a experiência do usuário
                $("#numero").focus();
            }
        });
    });


    $('#cnpj').focusout(function(e){
      e.preventDefault();
      let val = $(this).val();
      $.ajax({
        url:'interno/consulta_cnpj.php',
        data:{cnpj:val},
        type:'POST',
        dataType:'JSON',
        success:function(response){
          if(response.status == 'OK'){
            $('#razao').val(response.nome);
            $('#fantasia').val(response.fantasia);
            $('#abertura').val(response.abertura);
            $('#cep').val(response.cep);
            $('#logradouro').val(response.logradouro);
            $('#numero').val(response.numero);
            $('#bairro').val(response.bairro);
            $('#cidade').val(response.municipio);
            $('#complemento').val(response.complemento);
            $('#uf').val(response.uf);
            $('#email').val(response.email);
            $('#telefone').val(response.telefone);
          }else if(response.status == 'ERROR'){
            swal('CNPJ Errado','Digite um CNPJ Válido','error');
          }
        },
        
        error:function(){
          swal('Erro na integração com a receita','Por gentileza preencher os dados manualmente','error');
        }
        
         
      })  ;
    });

    $('.buscar').click(function(event) {
        event.preventDefault();

        var termo = $('.search').val();

        var lista = document.getElementById('Historico');

    });

    $("div.holder").jPages({
        containerID: "paganation_box",
        perPage      : 12
    });

    $('.holder a').click(function(event) {
        $('html, body').animate({
            scrollTop: $("article").offset().top -50
        }, 2000);
    });

    $('.holder').addClass('pagination pagination-lg');

    if($('#gmap_canvas').length){
        google.maps.event.addDomListener(window, 'load', init_map);
    }

    $('.logar').click(function(e){
        e.preventDefault(); 

        $('.logar').text('Carregando...').append('<i class="fa fa-spinner" data-fa-transform="rotate-45"></i>');

        $('.boxLogin').find(':required').css('border-bottom-color','');

        var cont = 0;
        $('.boxLogin').find(':required').each(function(){
            if($(this).val() == ""){
                $(this).css('border-bottom-color','red');
                swal('Informações incompletas','Por favor, preencher em destaque!','warning');

                setTimeout(function(){
                    $('.logar').text('Logar');
                },2000);

                cont++;
            }
        });

        if(cont == 0){

            var dados = $('.boxLogin').serialize();

            $.ajax({
                url:'pedidos/classes/Function.class.php',
                type:'POST',
                data: dados,
                success: function(data){

                    if(data == 0){
                        swal('Erro','Usuário não encontrado!','error');
                        $('.logar').text('Logar');
                    }else{
                        $('.boxLogin')[0].reset();
                        $('.logar').text('Sucesso').append(' <i class="fa fa-check"></i>');
                        swal('Sucesso','Redirecionando...','success');

                        setTimeout(function(){
                            location.href = 'pedidos/home.php'; 
                        },2000);
                    }
                    
                },
                error: function(){
                    swal('Erro','Ocorreu um erro!','error');
                },
            });
        }
    
    });

    $('.skiptranslate iframe').remove();

    // setTimeout(function(){
    //     $('.goog-te-combo').find('option[value="en"]').attr('selected',true);
    // },3000);

    $('.mudaIdioma').click(function(event) {
        event.preventDefault();

        var thisIdioma = $(this).attr('rel');
        
        var dados = {
            idioma: thisIdioma
        }

        $.ajax({
            url:'trocaIdioma.php',
            type:'POST',
            data: dados,
            success: function(data){

                location.reload();

            },
            error: function(){
                swal('Erro','Ocorreu um erro!','error');
            },
        });

    });

    $('.recuperarSenha').click(function(e){
        e.preventDefault(); 

        var getText = $(this).text();

        $('.recuperarSenha').text('Carregando...').append('<i class="fa fa-spinner" data-fa-transform="rotate-45"></i>');

        $('.boxLogin').find(':required').css('border-bottom-color','');

        var cont = 0;
        $('.boxLogin').find(':required').each(function(){
            if($(this).val() == ""){
                $(this).css('border-bottom-color','red');
                swal('Informações incompletas','Por favor, preencher em destaque!','warning');

                setTimeout(function(){
                    $('.recuperarSenha').text(getText);
                },2000);

                cont++;
            }
        });

        if(cont == 0){

            var dados = {
                'acaoForm' : 'recuperaSenha',
                'cgc'    : $('.emailRecupera').val()
            }

            $.ajax({
                url:'pedidos/classes/Function.class.php',
                type:'POST',
                data: dados,
                success: function(data){

                    if(data == 0){
                        swal('Erro','Usuário não encontrado!','error');
                        $('.recuperarSenha').text(getText);
                    }else{
                        $('.boxLogin')[0].reset();
                        $('.recuperarSenha').text('Sucesso').append(' <i class="fa fa-check"></i>');
                        swal('Sucesso','Senha enviada para o e-mail cadastrado','success');

                        
                    }
                    
                },
                error: function(){
                    swal('Erro','Ocorreu um erro!','error');
                },
            });
        }
    
    });


});

function open(elem) {
    if (document.createEvent) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent("change", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onchange");
    }
}

function init_map() {
    var myOptions = {
        zoom: 17,
        center: new google.maps.LatLng(-23.6545092, -46.752655, 17),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(-23.6545092, -46.752655, 17)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>METALÚRGICA ALADO</strong><br>Av.Jacobus Baldi, 668/682 - Jardim Fim de Semana <br> Santo Amaro - SP - Brasil - CEP:05847-000<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
