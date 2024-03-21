-- SQLITE - BANCO DE DADOS ESTÁTICO
-- verbos latinos
-- NOTAS: participium perfectum está para ativo


--conjugação para número e pessoa
CREATE TABLE IF NOT EXISTS pessoas
(
  id SERIAL,

  pri_sing TEXT,
  seg_sing TEXT,
  ter_sing TEXT,
  pri_plur TEXT,
  seg_plur TEXT,
  ter_plur TEXT,

  CONSTRAINT pk_pes_num PRIMARY KEY( id )
);

-- MODOS
CREATE TABLE infinitivos
(
  id SERIAL,

  praesens  TEXT,
  perfectum TEXT,
  futurum   TEXT,

  CONSTRAINT pk_infinit PRIMARY KEY( id )
);

CREATE TABLE indicativos
(
  id SERIAL,

  praesens INTEGER,
  imperfectum INTEGER,
  futurum INTEGER,
  perfectum INTEGER,
  plusquamperfectum INTEGER,
  futurumperfectum INTEGER,

  CONSTRAINT pk_indicat PRIMARY KEY( id ),
  CONSTRAINT fk_pq FOREIGN KEY( plusquamperfectum ) REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_im FOREIGN KEY( imperfectum )       REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_p  FOREIGN KEY( perfectum )         REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_pr FOREIGN KEY( praesens )          REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_fp FOREIGN KEY( futurumperfectum )  REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_f  FOREIGN KEY( futurum )           REFERENCES pessoas( id ) ON DELETE CASCADE
);

CREATE TABLE subjuntivos(

  id SERIAL,

  praesens INTEGER,
  imperfectum INTEGER,
  perfectum INTEGER,
  plusquamperfectum INTEGER,
 
  CONSTRAINT pk_subj PRIMARY KEY( id ),
  CONSTRAINT fk_pqp FOREIGN KEY( plusquamperfectum ) REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_im  FOREIGN KEY( imperfectum )       REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_p   FOREIGN KEY( perfectum )         REFERENCES pessoas( id ) ON DELETE CASCADE,
  CONSTRAINT fk_pr  FOREIGN KEY( praesens )          REFERENCES pessoas( id ) ON DELETE CASCADE
);

CREATE TABLE imperativos
(

  id SERIAL,

  praesens_sing TEXT,
  futurum_sing  TEXT,
  praesens_plur TEXT,
  futurum_plur  TEXT,

  CONSTRAINT pk_imp PRIMARY KEY( id )

);

-- NOMINAIS
-- NOTA perfectum participará dos ativos
CREATE TABLE participios
(
  id SERIAL,
  --ativo
  praesens  TEXT,
  futurum   TEXT,
  -- passívo 
  perfectum TEXT,

  CONSTRAINT pk_prt_act PRIMARY KEY( id )
);

CREATE TABLE supinos
(
  id SERIAL,

  unus TEXT,
  duo  TEXT,

  CONSTRAINT pk_prt_act PRIMARY KEY( id )

);

CREATE TABLE gerundios
(
  id SERIAL,

  acusativo TEXT,
  genitivo  TEXT,
  ablativo  TEXT,
  
  CONSTRAINT pk_gerund PRIMARY KEY( id )
);

CREATE TABLE gerundivos
(
  id SERIAL,

  palavra TEXT,
  
  CONSTRAINT pk_gerudv PRIMARY KEY( id )
);

-- VOZES
CREATE TABLE IF NOT EXISTS ativa
(
  id SERIAL,

  infinitivo INTEGER,
  indicativo INTEGER,
  subjuntivo INTEGER,
  imperativo INTEGER,

  participio INTEGER,
  gerundio   INTEGER,
  supino     INTEGER,

  CONSTRAINT pk_ativa PRIMARY KEY( id )
  CONSTRAINT fk_inf FOREIGN KEY( infinitivo ) REFERENCES infinitivos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_ind FOREIGN KEY( indicativo ) REFERENCES indicativos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_sub FOREIGN KEY( subjuntivo ) REFERENCES subjuntivos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_imp FOREIGN KEY( imperativo ) REFERENCES imperativos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_prt FOREIGN KEY( participio ) REFERENCES participios( id ) ON DELETE CASCADE,
  CONSTRAINT fk_ger FOREIGN KEY( gerundio   ) REFERENCES gerundios( id )   ON DELETE CASCADE,
  CONSTRAINT fk_sup FOREIGN KEY( supino )     REFERENCES supinos( id )     ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS passiva
(
  id SERIAL,

  infinitivo INTEGER,
  indicativo INTEGER,
  subjuntivo INTEGER,

  --participio INTEGER,  removido participium perfectum estará em ativo.
  gerundivo  INTEGER,

  CONSTRAINT pk_passiva PRIMARY KEY( id ),
  CONSTRAINT fk_inf FOREIGN KEY( infinitivo )  REFERENCES infinitivos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_ind FOREIGN KEY( indicativo )  REFERENCES indicativos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_sub FOREIGN KEY( subjuntivo )  REFERENCES subjuntivos( id ) ON DELETE CASCADE,
  CONSTRAINT fk_prt FOREIGN KEY( participio )  REFERENCES participios( id ) ON DELETE CASCADE,
  CONSTRAINT fk_ger FOREIGN KEY( gerundivo   ) REFERENCES   gerundios( id ) ON DELETE CASCADE
);

-- O VERBO
CREATE TABLE IF NOT EXISTS verbos
(
  id SERIAL,

  caracteristica TEXT
  conjugacao INTEGER,
  voz_ativa INTEGER, --deponência
  voz_passiva INTEGER,

  CONSTRAINT pk PRIMARY KEY( id )
  CONSTRAINT fk_ativa   FOREIGN KEY( voz_ativa )   REFERENCES ativa( id )   ON DELETE CASCADE,
  CONSTRAINT fk_passiva FOREIGN KEY( voz_passiva ) REFERENCES passiva( id ) ON DELETE CADCADE,
  CONSTRAINT cs_conjugacao CHECK (
    conjugacao = 1 ||
    conjugacao = 2 ||
    conjugacao = 3 ||
    conjugacao = 4
  ),
  CONSTRAINT cs_caracteristica CHECK (
    caracteristica = 'regular'   ||
    caracteristica = 'anomalo'   ||
    caracteristica = 'deponente' ||
    caracteristica = 'defectivo'
  )
);

--amáre i,s,i,s
INSERT INTO pessoas VALUES
( 0,'amó','amas','amat','amámus','amátis','amant' ),
( 1,'amábam','amábas','amábat','amabamus','amabatis','amábant'),
( 2,'amábo','amábis','amábit','amabimus','amabitis','amábunt'),
( 3,'amavi','amavistí','amavit','amavimus','amavistis','amávérunt'),
( 4,'amaveram','amaveras','amaverat','amaverámus','amaverátis','amaverant'),
( 5,'amavero','amaveris','amaverit','amaverimus','amaveritis','amaverint'),

( 6,'amem','ames','amet','amémus','amétis','ament' ),
( 7,'amárem','amáres','amáret','amarémus','amarétis','amarent' ),
( 8,'amaverim','amaveris','amaverit','amaverimus','amaveritis','amaverint' ),
( 9,'amavissem','amavisses','amavisset','amavissémus','amavissétis','amavissent' ),

(10,'amor','amáris','amátur','amámur','amáminí','amantur'),
(11,'amábar','amábáris','amábátur','amábámur','amábáminí','amábantur' ),
(12,'amábor','amáberis','amábitur','amábimur','amábiminí','amábuntur' ),
(13,'amátus sum','amátus es','amátus est','amátí sumus','amátí estis','amátí sunt' ),
(14,'amátus eram','amátus erás','amátus erat','amátí erámus','amátí erátis','amátí erant' ),
(15,'amátus eró','amátus eris','amátus erit','amátí erimus','amátí eritis','amátí erunt' ),

(16,'amer','améris','amétur','amémur','améminí','amentur')
(17,'amárer','amáréris','amárétur','amarémur','amaréminí','amarentur' ),
(18,'amátus sim','amátus sís','amátus sit','amátí símus','amátí sítis','amátí sint' ),
(19,'amátus essem','amátus essés','amátus esset','amátí essémus','amátí essétis','amátí essent' )
;

INSERT INTO pessoas VALUES
( 20,'moneó','monés','monet','monémus','monétis','monent' ),
( 21,'monébam','monébas','monébat','monébamus','monébatis','monébant' ),
( 22,'monébo','monébis','monébit','monébimus','monébitis','monébunt' ),
( 23,'monuí','monuistí','monuit','monuimus','monuistis','monuérunt' ),
( 24,'monueram','monueras','monuerat','monueramus','monueratis','monuerant' ),
( 25,'monueró','monueris','monuerit','monuerimus','monueritis','monuerint' ),

( 26,'moneam','moneás','moneat','moneamus','moneátis','moneant' ),
( 27,'monérem','monéres','monéret','monérémus','monérétis','monérent' ),
( 28,'monuerim','monueris','monuerit','monuerimus','monueritis','monuerint' ),
( 29,'monuissem','monuissés','monuisset','monuissémus','monuissétis','monuissent' ),
      
( 30,'moneor','monéris','monétur','monémur','monéminí','monentur' ),
( 31,'monébar','monébáris','monébátur','monébámur','monébáminí','monébantur' ),
( 32,'monébor','monéberis','monébitur','monébimur','monébiminí','monébuntur' ),
( 33,'monitus sum','monitus es','monitus est','monití sumus','monití estis','monití sunt' ),
( 34,'monitus eram','monitus erás','monitus erat','monití erámus','monití erátis','monití erant' ),
( 35,'monitus eró','monitus eris','monitus erit','monití erimus','monití eritis','monití erunt' ),

( 36,'monear','moneáris','moneátur','moneámur','moneáminí','moneantur' ),
( 37,'monéreor','monéréris','monérétur','monérémus','monéréminí','monérentur' ),
( 38,'monitus sim','monitus sís','monitus sit','monití símus','monití sítis','monití sint' ),
( 39,'monitus essem','monitus essés','monitus esset','monití essémus','monití essétis','monití essent' )
;

INSERT INTO pessoas VALUES
( 40,'legó','legis','legit','legimus','legitis','legunt' ),
( 41,'légebam','légébas','légebat','légébamus','légébatis','légebant' ),
( 42,'legam','legés','leget','legémus','legétis','legent' ),
( 43,'légí','légistí','légit','légimus','légistis','légérunt' ),
( 44,'légeram','légeras','légerat','légerámus','légerátis','légerant' ),
( 45,'légeró','légeris','légerit','légerimus','légeritis','légerint' ),

( 46,'legam','legás','legat','legámus','legátis','legant'),
( 47,'legerem','legerés','legeret','legerémus','legerétis','legerent' ),
( 48,'légerim','légeris','légerit','légerimus','légeritis','légerint' ),
( 49,'légissem','légissés','légisset','légissémus','légissétis','légissent' ),

( 50,'legor','legeris','legitur','legimur','legiminí','leguntur' ),
( 51,'legebar','legebáris','legebátur','legebámur','legebáminí','legebantur' ),
( 52,'legar','legéris','legétur','legémur','legéminí','legentur' ),
( 53,'lectus sum','lectus es','lectus est','léctí sumus','léctí estis','léctí sunt' ),
( 54,'lectus eram','lectus erás','lectus erat','léctí erámus','léctí erátis','léctí erant' ),
( 55,'lectus eró','lectus eris','lectus erit','léctí erimus','léctí eritis','léctí erunt' ),

( 56,'legar','legáris','legátur','legámur','legáminí','legantur' ),
( 57,'legerer','legeréris','legerétur','legerémur','legeréminí','legerentur'),
( 58,'léctus sim','léctus sís','léctus sit','léctí símus','léctí sítis','léctí sint' ),
( 59,'léctus essem','léctus essés','léctus esset','léctí essémus','léctí essétis','léctí essent' )
;

INSERT INTO pessoas VALUES
( 60,'audió','audís','audit','audíimus','audítis','audiunt' ),
( 61,'audiebam','audiébas','audiebat','audiébamus','audiébatis','audiebant' ),
( 62,'audiam','audiés','audiet','audiémus','audiétis','audient' ),
( 63,'audíví','audívistí','audívit','audívimus','audívistis','audívérunt' ),
( 64,'audíveram','audíveras','audíverat','audíverámus','audíverátis','audíverant' ),
( 65,'audíveró','audíveris','audíverit','audíverimus','audíveritis','audíverint' ),

( 66,'audiam','audiás','audiat','audiámus','audiátis','audiant'),
( 67,'audírem','audírés','audíret','audírémus','audírétis','audírent' ),
( 68,'audíverim','audíveris','audíverit','audíverimus','audíveritis','audíverint' ),
( 69,'audívissem','audívissés','audívisset','audívissémus','audívissétis','audívissent' ),

( 70,'audior','audíris','audítur','audímur','audíminí','audiuntur' ),
( 71,'audiebar','audiebáris','audiebátur','audiebámur','audiebáminí','audiebantur' ),
( 72,'audiar','audiéris','audiétur','audiémur','audiéminí','audientur' ),
( 73,'audítus sum','audítus es','audítus est','audítí sumus','audítí estis','audítí sunt' ),
( 74,'audítus eram','audítus erás','audítus erat','audítí erámus','audítí erátis','audítí erant' ),
( 75,'audítus eró','audítus eris','audítus erit','audítí erimus','audítí eritis','audítí erunt' ),

( 76,'audiar','audiáris','audiátur','audiámur','audiáminí','audiantur' ),
( 77,'audírer','audíréris','audírétur','audírémur','audíréminí','audíréntur'),
( 78,'audítus sim','audítus sís','audítus sit','audítí símus','audítí sítis','audítí sint' ),
( 79,'audítus essem','audítus essés','audítus esset','audítí essémus','audítí essétis','audítí essent' )


-- JUNTANDO TEMPOS NOS MODOS

--amare ativo
INSERT INTO indicativos VALUES
( 0, 0,1,2,3,4,5 );
INSERT INTO subjuntivos VALUES
( 0, 6,7,8,9 );
--passivo
INSERT INTO indicativos VALUES
( 1, 10,11,12,13,14,15 );
INSERT INTO subjuntivos VALUES
( 1, 16,17,18,19 );

--monuere ativo
INSERT INTO indicativos VALUES
( 2, 20,21,22,23,24,25 );
INSERT INTO subjuntivos VALUES
( 2, 26,27,28,29 );
--passivo
INSERT INTO indicativos VALUES
( 3, 30,31,32,33,34,35 );
INSERT INTO subjuntivos VALUES
( 3, 36,37,38,39 );

--legere ativo
INSERT INTO indicativos VALUES
( 4, 40,41,42,43,44,45 );
INSERT INTO subjuntivos VALUES
( 4, 46,47,48,49 );
--passivo
INSERT INTO indicativos VALUES
( 5, 50,51,52,53,54,55 );
INSERT INTO subjuntivos VALUES
( 5, 56,57,58,59 );

--audire ativo
INSERT INTO indicativos VALUES
( 6, 60,61,62,63,64,65 );
INSERT INTO subjuntivos VALUES
( 6, 66,67,68,69 );
--passivo
INSERT INTO indicativos VALUES
( 7, 70,71,72,73,74,75 );
INSERT INTO subjuntivos VALUES
( 7, 76,77,78,79 );


-- INSERÇÃO DE INFINITIVOS (ativos e passivos)

INSERT INTO infinitivos 
( 0, 'amáre','amávisse','amátúrum esse' ),
( 1, 'amárí','amátum esse','amátum írí' ),

( 2, 'monére', 'monuisse', 'monitúrum esse' ),
( 3, 'monérí','monitum esse','monitum írí' ),

( 4, 'legere', 'légisse', 'léctúrum esse' ),
( 5, 'legí','léctum esse','léctum írí'),

( 6, 'audíre','audívisse','audítúrum esse'),
( 7, 'audírí','audítum esse','audítum írí');



-- vários pre-inseridos
INSERT INTO imperativos VALUES
( 0, 'amá', 'amátó', 'amáte', 'amátóte' ),
( 1, 'moné','monétó','monéte','monétóte'),
( 2, 'lege','legitó','legite','legitóte' ),
( 3, 'audí','audító','audíte','audítóte');

INSERT INTO participios VALUES
( 0, 'amáns','amátúrus','amátus' ),
( 1, 'monéns','monitúrus','monitus' ),
( 2, 'legéns','léctúrus','léctus' ),
( 3, 'audiéns','audítúrus','audítus' ),

INSERT INTO supinos VALUES
( 0, 'amátum', 'amátú' ),
( 1, 'monitum', 'monitú' ),
( 2, 'léctum', 'léctú' ),
( 3, 'audítum', 'audítú' );

INSERT INTO gerundios VALUES
( 0, 'amandum','amandí','amandó'),
( 1, 'monendum','monendí','monendó'),
( 2, 'legendum','legendí','lengendó'),
( 3, 'audiendum','audiendí','audiendó');

INSERT INTO gerundivos VALUES
( 0, 'amandus' ),
( 1, 'monendus' ),
( 2, 'legendus' ),
( 3, 'audiendus');

-- (inf,ind,sub,imp,part,ger,sup)
INSERT INTO ativa VALUES
( 0, 0,0,0,0,0,0,0,
  1, 2,2,2,1,1,1,1,
  2, 4,4,4,2,2,2,2,
  3, 6,6,6,3,3,3,3,
);

-- ( inf,ind,sub,gerundivo )
INSERT INTO passiva VALUES
( 0, 1,1,1,0
  1, 3,3,3,1
  2, 5,5,5,2
  3, 6,7,7,3
);

-- (caracteristica,conjugacao,ativaFK,passivaFK)
INSERT INTO verbos VALUES
( 'regular',1,0,0
  'regular',2,1,1
  'regular',3,2,2
  'regular',4,3,3
);

