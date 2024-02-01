
			var max = 255
			var min = 0
			var randomD;
			var respostaA = document.getElementById('resposta')
			var respostaB = document.getElementById('resposta1')
			var respostaC = document.getElementById('resposta2')
			var respostaD = document.getElementById('resposta3')
			var respostaE = document.getElementById('resposta4')
			var respostaF = document.getElementById('resposta5')
			var a;
			var b;
			var c;
			
				function novaCor() {
					//gerando uma cor aleatoria em RGB
				 	a = Math.floor(Math.random() * (max - min + 1)) + min;
					b = Math.floor(Math.random() * (max - min + 1)) + min;
					c = Math.floor(Math.random() * (max - min + 1)) + min;
					var d = Math.floor(Math.random() * (max - min + 1)) + min;
					var e = Math.floor(Math.random() * (max - min + 1)) + min;
					var f = Math.floor(Math.random() * (max - min + 1)) + min;
					var g = Math.floor(Math.random() * (max - min + 1)) + min;
					var h = Math.floor(Math.random() * (max - min + 1)) + min;

					
					console.log(a, b, c);

						//gerando um numero entre 1 e 6 onde ficara a resposta certa com o background certo.
						max1 = 0
						min1 = 7
						ramdomD = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
							console.log(ramdomD)

							//Colocando a cor gerada em background das respostas entre 1 e 6.
							//Colocando cor errada nos background das respostas erradas

								if (ramdomD === 1) {
									respostaA.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${b}, ${c}, ${g}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${c}, ${h}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${h}, ${h}, ${f}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${f}, ${a}, ${h}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${f}, ${e}, ${e}, 1.0)`;
								} else if (ramdomD === 2) {
									respostaA.style.backgroundColor = `rgba(${f}, ${g}, ${c}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${c}, ${h}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${h}, ${h}, ${f}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${f}, ${a}, ${h}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${f}, ${e}, ${e}, 1.0)`;
								} else if (ramdomD === 3) {
									respostaA.style.backgroundColor = `rgba(${f}, ${h}, ${c}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${b}, ${c}, ${g}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${h}, ${h}, ${f}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${f}, ${a}, ${h}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${f}, ${e}, ${e}, 1.0)`;
								} else if (ramdomD === 4) {
									respostaA.style.backgroundColor = `rgba(${a}, ${f}, ${g}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${b}, ${c}, ${g}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${c}, ${h}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${f}, ${a}, ${h}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${f}, ${e}, ${e}, 1.0)`;
								} else if (ramdomD === 5) {
									respostaA.style.backgroundColor = `rgba(${c}, ${b}, ${b}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${b}, ${c}, ${g}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${c}, ${h}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${h}, ${h}, ${f}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${f}, ${e}, ${e}, 1.0)`;
								} else if (ramdomD === 6) {
									respostaA.style.backgroundColor = `rgba(${a}, ${a}, ${c}, 1.0)`;
									respostaB.style.backgroundColor = `rgba(${b}, ${c}, ${g}, 1.0)`;
									respostaC.style.backgroundColor = `rgba(${a}, ${c}, ${h}, 1.0)`;
									respostaD.style.backgroundColor = `rgba(${h}, ${h}, ${f}, 1.0)`;
									respostaE.style.backgroundColor = `rgba(${f}, ${a}, ${h}, 1.0)`;
									respostaF.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
								} 
									

											//Escrevendo a cor gerada em RGB no topo
											var cor = ('RGB(' + a + ',' + b + ',' + c + ')')
											var rgba = document.getElementById('RGB');
								            rgba.textContent = cor;
								            	//Apagando a resposta quando gerar novas cores
								            	document.getElementById('corretoFalso').innerHTML = ('')
								            	document.getElementById('topo').style.backgroundColor = `rgba(0, 139, 139, 1.0)`;


				}

				
				novaCor()

				
						function funcaoA() {
					    if (ramdomD === 1) {
					        document.getElementById('corretoFalso').innerHTML = ('Correto');
					        console.log(a)
					        document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
					        respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					    } else {
					        document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente');
					        respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;

					    }
					}	
						function funcaoB () {
						if (ramdomD === 2) {
							document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
							document.getElementById('corretoFalso').innerHTML = ('Correto')
							respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;

						} else {
							document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente')
							respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						}
					}
						function funcaoC () {
						if (ramdomD === 3) {
							document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
							document.getElementById('corretoFalso').innerHTML = ('Correto')
							respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						} else {
							document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente')
							respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						}
					}	
						function funcaoD () {
						if (ramdomD === 4) {
							document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
							document.getElementById('corretoFalso').innerHTML = ('Correto')
							respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						} else {
							document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente')
							respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						}
					}	
						function funcaoE () {
						if (ramdomD === 5) {
							document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
							document.getElementById('corretoFalso').innerHTML = ('Correto')
							respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						} else {
							document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente')
							respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						}
					}	
						function funcaoF () {
						if (ramdomD === 6) {
							document.getElementById('topo').style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;
							document.getElementById('corretoFalso').innerHTML = ('Correto')
							respostaA.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaC.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaD.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaE.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
					        respostaB.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						} else {
							document.getElementById('corretoFalso').innerHTML = ('Falso, tente novamente')
							respostaF.style.backgroundColor = `rgba(28, 28, 28, 1.0)`;
						}
					}
				
		