-- SQLITE
-- substantivos latinos

CREATE TABLE IF NOT EXISTS substantivos
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  genero CHAR,
  caso INT,
  nomS TEXT, genS TEXT, datS TEXT, acuS TEXT, ablS TEXT, locS TEXT, vocS TEXT,
  nomP TEXT, genP TEXT, datP TEXT, acuP TEXT, ablP TEXT, locP TEXT, vocP TEXT,
  CONSTRAINT chave_primaria PRIMARY_KEY( id ),
  CONSTRAINT genero CHECK ( genero = 'f' || genero = 'm' || genero = 'n' ),
  CONSTRAINT caso CHECK ( caso > 0 && caso < 6 )
);

-- substantivos selecionados de acordo com suas caracteristicas
INSERT INTO substantivos VALUES
('f', 1
    ,'rosa', 'rosae',  'rosae','rosam','rosá','-','-'
    ,'rosae','rosárum','rosís','rosás','rosís','-', '-'),

('f', 1
    ,'insula', 'insulae',  'insulae','insulam','insulá','insulae','-'
    ,'insulae','insulárum','insulís','insulás','insulís','-', '-'),

('f', 1
    ,'Iulia', 'Iuliae',  'Iuliae','Iuliam','Iuliá','-','Iulia'
    ,'-','-','-','-','-','-', '-'),

('m', 2
    ,'equus', 'equí', 'equó', 'equum', 'equó', '-', '-'
    ,'equí', 'equórum', 'equís', 'equós', 'equís', '-', '-'),

('m', 2
    ,'puer', 'puerí', 'pueró', 'puerum', 'pueró', '-', '-'
    ,'puerí', 'puerórum', 'puerís', 'puerós', 'puerís', '-', '-'),

('n', 2
    ,'verbum', 'verbí', 'verbó', 'verbum', 'verbó', '-', '-'
    ,'verba', 'verbórum', 'verbís', 'verba', 'verbís', '-', '-'),

('n', 2
    ,'poculum', 'poculí', 'poculó', 'poculum', 'poculó', '-', '-'
    ,'pocula', 'poculórum', 'poculís', 'pocula', 'poculís', '-', '-'),

('m', 2
    ,'Marcus', 'Marcí', 'Marcó', 'Marcum', 'Marcó', '-', 'Marce'
    ,'-', '-', '-', '-', '-', '-', '-'),

('f', 2
    ,'humus', 'humí', 'humó', 'humum', 'humó', '-', '-'
    ,'humí', 'humórum', 'humís', 'humós', 'humís', '-', '-'),

('m', 4
    ,'portus','portús','portuí','portum','portú','portús','-',
    ,'portús','portuum','portibus','portús','portibus','-','-'),

('m', 4
    ,'domus','domús','domuí','domum','domú','domús','-',
    ,'domús','domuum','domibus','domús','domibus','-','-'),

('n', 4
    ,'cornú','cornús','cornú',     'cornú','cornú','cornú','-',
    ,'cornúa','cornuum','cornibus','cornúa','cornibus','-','-'),

('m', 3
    ,'sól','sólis','sólí','sólem','sóle','-','-',
    ,'sólés','sólum','sólibus','sólés','sólibus','-','-'),

('m', 3
    ,'Caesar','Caesaris','Caesarí','Caesarem','Caesare','-','Caesar',
    ,'-', '-', '-', '-', '-', '-', '-'),

('m', 3
    ,'leó','leónis','leóní','leónem','leóne','-','-',
    ,'leónés','leónum','leónibus','leónés','leónibus','-','-'),

('f', 3
    ,'vóx','vócis','vócí','vócem','vóce','-','-',
    ,'vócés','vócum','vócibus','vócés','vócibus','-','-'),

('n', 3
    ,'ós','óris','órí','ós','óre','-','-',
    ,'óra','órum','óribus','óra','óribus','-','-'),

('n', 3
    ,'corpus','corporis','corporí','corpus','corpore','-','-',
    ,'corpora','corporum','corporibus','corpora','corporibus','-','-'),

('n', 3
    ,'opus','operis','operí','opus','opere','-','-',
    ,'opera','operum','operibus','opera','operibus','-','-'),

('n', 3
    ,'nómen','nóminis','nóminí','nómen','nómine','-','-',
    ,'nómina','nóminum','nóminibus','nómina','nóminibus','-','-'),

('f', 3
    ,'návis','návis','náví','návem','náve','-','-',
    ,'návés','návium','návibus','návés','návibus','-','-'),

('f', 3
    ,'urbis','urbis','urbí','urbem','urbe','-','-',
    ,'urbés','urbium','urbibus','urbés','urbibus','-','-'),

('m', 3
    ,'móns','montis','montí','montem','monte','-','-',
    ,'montés','montium','montibus','montés','montibus','-','-'),

('n', 3
    ,'mare','maris','marí','mare','marí','-','-',
    ,'maria','marium','maribus','maria','maribus','-','-'),

('n', 3
    ,'animal','animális','animálí','animal','animálí','-','-',
    ,'animalia','animálium','animálibus','animalia','animálibus','-','-'),

('f', 5
    ,'diés','diéí','diéí','diem','die','-','-',
    ,'diés','diérum','diébus','diés','diébus','-','-'),

('f', 5
    ,'res','reí','reí','rem','re','-','-',
    ,'rés','rérum','rébus','rés','rébus','-','-'),

('f', 1
    ,'','','','','','','',
    ,'','','','','','','');
