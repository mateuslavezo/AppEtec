import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vejamaisnoticias',
  templateUrl: './vejamaisnoticias.page.html',
  styleUrls: ['./vejamaisnoticias.page.scss'],
})
export class VejamaisnoticiasPage implements OnInit {

  public noticiasEtec = [];

  public noticias = [
    {titulo: 'Os gabaritos de vagas remanescentes para acesso direto ao segundo módulo do Ensino Técnico já estão na internet e na página www.vestibulinhoetec.com.br.', data: '17 jun de 2019', texto: 'A prova teste do processo seletivo das Escolas Técnicas Estaduais (Etecs) do segundo semestre de 2019 foi oferecida para dez cursos técnicos: Administração online, Automação Industrial, Contabilidade, Eletrônica, Guia de Turismo online, Informática para Internet, Mecatrônica, Meio Ambiente, Química e Serviços Jurídicos. Amanhã, dia 18, a partir das 14 horas, será divulgado o gabarito da prova para os cursos de especialização técnica também pela internet.', img: "https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/19.06.17-Gabarito-Vagas-remanscentes-1200x800.jpg"},
    {titulo: 'Centro Paula Souza sedia final do The Schools Challenge', data: '10 jun,2019', texto: 'O Demoday que encerrou a edição brasileira do The Schools Challenge foi realizado neste sábado (15), na sede administrativa do Centro Paula Souza (CPS), no centro da Capital. A iniciativa é do banco de investimentos J. P. Morgan e busca preparar estudantes do Ensino Médio da rede pública para prosseguir sua trajetória acadêmica e conseguir uma colocação no mercado de trabalho que contribua com o crescimento econômico sustentável. Participaram do evento alunos da Escola Técnica Estadual (Etec) Basilides de Godoy e da Escola Estadual Caetano de Campos. Cada escola apresentou três projetos, avaliados por um júri especializado, que premiou uma iniciativa de cada unidade. Pela Etec, os vencedores foram os criadores do aplicativo Preparados, desenvolvido para auxiliar estudantes no vestibular. O app vencedor da Caetano de Campos foi o Diversity, que pretende ampliar possibilidades de colocação no mercado de trabalho para o público LGBT. Os grupos vitoriosos farão visitas guiadas a centros tecnológicos e receberão três meses de mentoria de pré-aceleração, para que os projetos se desenvolvam.', img: "https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/IMG_20190615_133936-1200x800.jpg"},
    {titulo: 'Etecs superam Finlândia, Japão e Canadá no Pisa para Escolas', data: '13 jun de 2019', texto: 'Quatro Escolas Técnicas Estaduais (Etecs) participantes em 2017 do Pisa para Escolas (Pisa for Schools em inglês, o Pisa-S), avaliação internacional de estudantes da Organização para a Cooperação e Desenvolvimento Econômico (OCDE), alcançaram resultados equivalentes ou superiores aos de países desenvolvidos. Os resultados foram apresentados nesta quinta-feira, 13, pela diretora-superintendente do Centro Paula Souza, Laura Laganá, na Conferência Internacional de Lançamento do Pisa para Escolas, no Rio. O exame avalia a competência de estudantes de 15 anos em Leitura, Matemática e Ciências em todo o mundo. As unidades do Centro Paula Souza (CPS) participaram a convite da Fundação Lemann, que trouxe o Pisa-S para o Brasil com o objetivo de contribuir para a construção de políticas públicas baseadas em dados e evidências. Foram avaliadas 46 escolas brasileiras, da quais 13 eram particulares e 33, da rede pública. As Etecs São Paulo (Etesp) e Guaracy Silveira, ambas na Capital, obtiveram notas mais elevadas que a média de países como Canadá, Finlândia, Japão, Polônia, Portugal, França, Reino Unido, Estados Unidos, Rússia, China e Chile em todas as três áreas.', img: "https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/pisa-fabio.jpg"},
    {titulo: 'Centro Paula Souza recebe encontro de negócios', data: '11 jun de 2019', texto: 'Nesta terça-feira (11), o Centro Paula Souza (CPS) recebeu o encontro promovido pela Câmara de Comércio Brasil Catalunha na sede da instituição, na Capital. Participaram da iniciativa, prefeitos dos municípios de Atibaia, Garça, Jaguariúna e Presidente Prudente além dos secretários municipais de Guarulhos e Santana de Paranaíba. A assessora de Relações Internacionais do CPS, Marta Iglesis, abriu o evento, que teve como proposta proporcionar aos gestores públicos uma oportunidade de apresentar aos empresários catalães as opções para investimento em suas regiões. O presidente da Câmara de Comércio Brasil Catalunha, Javier Mirallas, ressaltou que tem grande expectativa em estreitar o relacionamento e amadurecer alianças estratégicas e de negócios entre a Catalunha e o Brasil. Os prefeitos e os secretários apresentaram as potencialidades naturais, a vocação econômica e a infraestrutura das respectivas regiões, dando um panorama variado das potencialidades econômicas do Estado. Eles também mostraram empreendimentos bem-sucedidos em áreas como Logística, Tecnologia, Agronegócio, Indústria e Turismo. O evento contou ainda com a participação do diretor da Câmara de Comércio Brasil Canada(CCBC), Francisco Arbós, do presidente da Associação Brasileira de Concessionárias de Iluminação (ABCIP), Eduardo Gurevich, e de executivos de empresas catalães como Caixabank, Bright Cities, Eixos, Catalonia Trade & Investment, Ferrocarils de la Generalitat, Simon, S&E Partners e Socializa.', img: "https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/06/DSC_3299-1200x800.jpg"},
    {titulo: 'Fatec Tatuí cria app gratuito para calcular dose de medicamentos', data: '6 jun,2019', texto: 'Para garantir mais segurança e agilidade no atendimento de pacientes, os profissionais de saúde agora podem contar com o aplicativo CalcMedic, que faz o cálculo exato da dosagem dos medicamentos. Desenvolvido por alunos da Faculdade de Tecnologia do Estado (Fatec) Tatuí, o app pode ser baixado gratuitamente e está disponível para a plataforma Android. Mais de 15 mil downloads do aplicativo já foram feitos em todo País.A ferramenta vem facilitar o trabalho do profissional responsável pela conversão das fórmulas prescritas por médicos e administrá-las nos pacientes. Entre os recursos disponíveis nessa primeira versão do app, estão taxa de gotejamento, volume da medicação, concentração de gotas, conversão de comprimido para gota, medicação por peso e diluição de medicamentos. Os criadores do CaldMedic são tecnólogos formados pela Fatec que agora estão cursando a segunda graduação na mesma unidade. Bruno Gonçalves é aluno do curso superior tecnológico de Gestão Empresarial e Lucas Valario faz Gestão da Tecnologia da Informação.A ideia surgiu da conversa entre Lucas e sua namorada, Caroline, que é estudante de Enfermagem. Ela comentou que uma tecnologia desse tipo poderia aumentar a precisão e auxiliar na administração dos medicamentos. Lucas identificou nessa sugestão uma demanda potencial para a área de saúde. Os criadores conseguiram apresentar a primeira versão do aplicativo duas semanas depois. “Agora estamos fazendo ajustes e trabalhando na atualização dessa plataforma de acordo com os feedbacks que recebemos. A próxima etapa será desenvolver a interface do app para o sistema iOS”, explica Bruno.  ', img: "https://www.cps.sp.gov.br/wp-content/uploads/sites/1/2019/05/app-de-sa%C3%BAde-1200x800.jpg"},

    
    
    
    {titulo: 'Comunicado para o dia 14 de junho', data: '10 jun,2019', texto: 'A direção da Etec Comendador João Rays informa que no dia 14 de junho de 2019 haverá atividades escolares de acordo com o calendário escolar.', img: "https://i2.wp.com/tuiuti.sp.gov.br/wp-content/uploads/2018/07/comunicado.jpg?fit=696%2C464&ssl=1"},
    {titulo: 'Comunicado aos inscritos do Processo Seletivo de Docentes, Aviso nº 040/04/2019', data: '30 maio,2019', texto: 'Saiu publicado no Diário Oficial (29/05/2019, seção I, págs. 174 e 175) o Edital de deferimento e indeferimento de inscrições, de designação da banca examinadora e convocação para entrega do memorial circunstanciado. Confiram o Edital de Deferimento, para conhecimento da data e horários de entrega do Memorial Circunstanciado, através do Diário Oficial, no mural da Etec e na página de processos seletivos no site da escola.', img: "http://www.portoferreirahoje.com.br/thumb/740x428/ahBzfmxvY2FsLW5ld3MtaHJkchILEgVJbWFnZRiAgIDPr5aLCgw.jpg"},
    {titulo: 'Parceria Microsoft – Centro Paula Souza (Nota de Atualização)', data: '22 maio,2019', texto: 'Caros alunos e professores, Referente à parceria Microsoft – Centro Paula Souza, gostaríamos de apresentar as seguintes notas de atualização: Loja de Softwares (softwares gratuitos para alunos e professores) No começo desse ano, a Microsoft implementou alterações na sua loja de Softwares, o que tem gerado algumas dúvidas no acesso. Esclarecemos que seus benefícios de software gratuitos estão disponíveis no portal Azure Dev Tools for Teaching, no endereço https://azureforeducation.microsoft.com/devtools Leia o documento 2019 Instruções – Azure Dev Tools for Teaching para saber como acessar o portal e os softwares disponíveis para o seu perfil. E-mail institucional (alunos e professores) Nenhuma alteração foi realizada nos acessos referentes aos e-mails já existentes. Sobre a criação de e-mails novos, informamos que esse processo está ocorrendo automaticamente tanto para alunos (quando realiza a matrícula no curso) quanto para professores (quando são contratados pela instituição de ensino). Caso não saiba ou tenha esquecido seu e-mail ou sua senha, você pode solicitar a redefinição através do nosso site, na página: http://www.etecbarrabonita.com.br/meuemail Em caso de dúvidas, entre em contato com a coordenação de TI.', img: "http://3.bp.blogspot.com/-3CriPDdJKps/TdL0qslAw9I/AAAAAAAACDk/UNbUzvFKRJs/s1600/568bfd57ddrceria_jpg.jpg"},
    {titulo: 'Minha história na Etec: Rony Aparecido Piqueira (Informática)', data: '8 maio,2019', texto: 'Meu nome é Rony, tenho 34 anos, e atuo na área de TI (Tecnologia da Informação) há pouco mais de 8 anos. Antes de me aventurar na área de tecnologia, já possuía algumas competências advinda de trabalhos anteriores em empresas do comércio, e obtidos também na área acadêmica com a formação de Técnico em Contabilidade e Bacharel em Administração (ênfase em TI). O interesse em buscar algo novo aumentava de forma constante, e então, entendi que era necessário desenvolver novos competências, era necessário complementar o conhecimento adquirido na graduação. Por diversas indicações e pelo meu interesse na área de tecnologia, decidi investir no curso Técnico de Informática da ETEC Comendador João Rays. Com o esforço necessário, a partir de então, consegui grandes conquistas: intercâmbio cultural para estudar Inglês nos Estados Unidos; estágio em uma empresa da área de tecnologia com posterior contratação; e embasamento teórico e prático para iniciação em um mundo novo e cheio de desafios. Desde então, participei de inúmeros projetos, reuniões, experiências profissionais e novos desafios do conhecimento, adquirindo algumas certificações na área de TI e o título de MBA em Gerenciamento de Projetos. O desafio mais recente novamente está relacionado com a sala de aula, mas agora atuando como professor, e justamente na escola que sou tão grato. O trabalho feito pela ETEC Comendador João Rays na cidade de Barra Bonita é memorável! Tenho muita gratidão por todos os professores e direção, reconheço nessa unidade todo o interesse no desenvolvimento humano, o qual deve ser premissa de toda instituição de ensino séria, por maior que sejam os desafios enfrentados.', img: "http://www.etecbarrabonita.com.br/wp-content/uploads/2019/05/Rony-300x300.jpg"},
    {titulo: 'Processo Seletivo Simplificado de Docentes', data: '8 maio,2019', texto: 'Estão abertas as inscrições para o Processo Seletivo Simplificado de Docentes, objetivando a formação de cadastro para a contratação temporária de excepcional caráter público, para diversos Componentes Curriculares, no período de 08/05/2019 à 22/05/2019 (exceto aos sábados, domingos, feriados e pontos facultativos) no horário das 08:00 às 11:00, das 14:00 às 16:00 e das 19:00 às 21:00.', img: "http://unirn.edu.br/2016/uploads/selecao_de_docentes.jpg"},
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
