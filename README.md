# curriculo_online
## Projeto Currículo Online

1. Este projeto pode ser utilizado como template para construir um currículo baseado em **HTML** e também se presta como objeto de estudo e exercitação para aqueles que desejem treinar e aprender oru revisar fundamentos de **Javascript**, HTML, **CSS** assim como se familiarizar com a notação de dados do tipo **JSON** e conhecer, tendo uma noção do que a biblioteca **jQuery** pode fornecer em termos de funcionalidade no código Javascript de uma página HTML. Primariamente, a linguagem Javascript com jQuery, utilizando JSON é o alvo do projeto. Secundariamente, há o consumo da **API do Gooogle Maps**, para a a renderização de um mapacom seus marcadores de localidades.
2. Neste readme.md existem instruções como você deve personalizar este projeto para construir o currículo que deseja - existem dicas e orientações para isso, a parte necessária que utiliza jQuery está descrita e explicada, de forma que este projeto é uma boa forma de conhecer (ou rever) um pouco da funcionalidade desta esta biblioteca. Como exemplo, este projeto está completo, assim, neste readme.md, estão exaltados todos os pontos que devem (e foram implementados) para análise e estudo, ou extensão de funcionalidades.
2. Neste projeto foi desenvolvido um currículo interativo que lê conteúdo de um arquivo JSON e dinamicamente mostra esse conteúdo em uma página HTML, dentro de um modelo CSS. Em Javascript foram utilizados objetos, funções, condicionais e estruturas de controle para compor o conteúdo que será exibido na página HTML. A utilização de jQuery também foi feita.
3. Este projeto foi concluído com sucesso como uma das tarefas para concluir o curso da especialização Frontend Developer Nanodegree da [Udacity] (https://br.udacity.com).


### Preview:

## O currículo renderizado em um browser tem a sua aparência na seguinte forma:

Tela 1
![tela 1](https://lqz02q-dm2306.files.1drv.com/y4mID1HDWZbzVcQA12GVYfAPwWm_SU73McfsGExZKDPziAJ64Yscl697EJqtCVh1gZrgWM7Q1v_feuJLoDuvi7EaJgBrhamp8wfkhNCDNIbNDkvE_aIQIir1P4wb3na8TX2-PjDfwWBCY3Sq7EdUwbWXreEEliQTJApDIIVbpcs2f6xzHcz3NtgHkpxg2rc6BrWWHVeOIYHhQdVpwiOZyKNyw?width=1261&height=892&cropmode=none)
Tela 2
![tela 2](https://afrrwq-dm2306.files.1drv.com/y4mU2AC55pvMD05tBiS_PWbi5NOWUBzMMKeQ_RjKBYxFMKOCNGp-2pdbfO6V5G1QaWyheYo8Gi0G4EsT9YPjIbTJqeXQY7GGRTOkI9Ar3Cmp84OAPlJWiTPbT3leGDZogxnPGxtb71_jEc3P_k_qJuFys6qezKGy5xIi3AIAr7hNTyE85ToLseAau6BItO0yLVbCpNpipdN8nHJ3g3hKQFVQw?width=1261&height=892&cropmode=none)
Tela 3
![tela 3](https://zevdhw.dm2302.livefilestore.com/y4mvgZSgWxZPATwLWZCnfgsYzjqszSBwy7KaND1jEQ57SFn8MgNsdlc9hy_sSB6wCnoYaXwzS2-h2AwlJRWoFUflPRCl1gMgIeCJ6FeK8wmFGzn3rpE0Rc4qUvvu1oG-ygBtQbcVGbJXeA1sw5bfo5rW7yJd1-6Fdid7LctEuxCpOPrdnqQ-GFfC8VyXQYzCiYg-NlS8trzsVfXPnqzhijX8w?width=1263&height=612&cropmode=none)
Tela 4
![tela 4](https://nkm6bw.dm1.livefilestore.com/y4mWEeaedhShVxFqG65SvPABQFUTQp6UfZUKFRK1M3YGuvB3FAHsQ6CPgCt-h8xBfU1iHO6AFrl52yyC2zoGnAKy_66FzzsTmSf3PVsv9nd0dooK-gi57KL0PDUq6beib8NjwNw5wgtTlj8Qyj6ryt8y3KWTJcTy40Qpmbu_vHyLNGOkJh9M-Qn2KwH41Uq0FSKeH05oDMh1WcJItsPECjB2Q?width=1263&height=608&cropmode=none)

E o repositório inclui os seguintes arquivos:

* **index.html**: O documento HTML. Contém links para todos os recursos CSS e JS necessários para processar o currículo, incluindo para o arquivo Javascript resumeBuilder.js.
* **js/helper.js**: Contém código auxiliar necessário para formatar o currículo e construir o mapa. 
* **js/resumeBuilder.js**: Este arquivo está preenchido com meus dados (desatualizados na corrente data). Você deve escrever seu código aqui, substituindo os dados exemplificados ou adicionando mais informação conforme o exemplo de currículo que deseje construir/estudar/exercitar;
* **js/jQuery.js**: A biblioteca jQuery.
* **css/style.css**: Contém o CSS utilizado para compor o estilo da página. 
* **README.md**: O arquivo readme do Github.

* e algumas imagens no diretório images.

## O ponto de partida para construir o seu currículo personalizado...

### Observação importante:
Estes são os passos para que o currículo dinamicamente seja preenchido, siga cada ponto, analisando o código que já está pronto no projeto e observe que o currículo pode ser personalizado seguindo o padrão das implementações já feitas, caso se deseje adicionar outras seções ao currículo (ou remover, ou alterá-las) e claro, os dados do currículo estão contidos no formato JSON, codificados de forma 'inline'.
 
### js/helper.js
Dentro de helper.js há coleções de strings contendo snippets de HTML. Nos snippets são encontrados 'placeholders' de dados, como `%data%` ou `%contact%`.

Cada string tem um título que descreve como ela deve ser usada. Por exemplo, 'HTMLworkStart' deve ser o primeiro `<div>` na seção do currículo. 'HTMLschoolLocation' contém um "placeholder" `%data%`, que foi preenchido com a localização de uma das instituições de ensino.

### O processo:
O currículo tem quatro secções distintas: trabalho, educação, projetos e um cabeçalho com informações biográficas. Foi preciso:

1. Construir quatro JSONs, cada um representando uma seção diferente do currículo. Os objetos criados precisaram seguir exatamente os nomes dentro do esquema abaixo. Para se certificar de que os JSONs estavam formatados corretamente foi usado o validador de sintaxe JSON em <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contém:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
             biopic: url
            display: function taking no parameters

* `education` contém:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contém:
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contém:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Foi construída uma iteração (loop) para cada JSON e adicionada a sua respectiva informação ao arquivo index.html na seção correta.

* Primeiro de tudo, foram utilizadas as funções `selector.append()` e `selector.prepend()` do jQuery  para modificar o index.html.  A função `selector.append()` faz um elemento aparecer no final da seção - do HTML - selecionada e a função `selector.prepend()` faz um elemento aparecer no início da seção - do HTML - selecionada.
 	
	* Preste bastante atenção nos ids dos `<div>`s no arquivo index.html e nos snippets de HTML no arquivo helper.js. Eles foram muito úteis como seletores do jQuery para os métodos `selector.append()` e `selector.prepend()`.
   
* Também foi usado o método (em Javascript)  `string.replace(old, new)` para trocar todo o texto do placeholder (por exemplo, `%data%`) pelos dados dos seus JSONs do seu currículo.

* Aqui está um exemplo de um trecho de código que adicionou à página uma localização de uma das empresas trabalhadas:

   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`

 * Use os mockups (figuras) acima como guia para quando precisar adicionar **mais** elementos à página.

3. O currículo inclui um mapa interativo. Para adicioná-lo, adicionou-se a string 'googleMap' ao div `<div id=”mapDiv”>`.

4. Todo o código para adicionar elementos ao currículo está contido em funções. E todas as suas funções estão encapsuladas dentro dos mesmos objetos que contém os dados do seu currículo. por exemplo, as funções para adicionar elementos que contém experiências profissionais à página são encontradas dentro do mesmo objeto que contêm os dados a respeito das experiências profissionais.

5. O currículo deve também loga (usando `console.log()`) informação sobre os pontos aonde o usuário clicou na tela do currículo. No arquivo helper.js, você encontrará a ligação feita pelo jQuery entre o evento "click" e a função handler - `.click( handler )` - que foi codificado, implementado para trabalhar com a função `logClicks(x,y)`.
6. **É possível adicionar informação que aparecerá no click dos pins no mapa. Verifique em helper.js e na API do Google Maps API como ponto de partida para adicionar esta funcionalidade. Este ponto ~~não~~ está implementado no atual momento.**
