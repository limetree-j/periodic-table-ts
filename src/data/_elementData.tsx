import ElementModel from "../models/ElementModel"

const elementData:Map<number, ElementModel> = new Map<number, ElementModel>();

elementData.set(1, new ElementModel('non-metals','Hydrogen','수소','H',1));
elementData.set(18, new ElementModel('noble-gases','Helium','헬륨','He',18));

elementData.set(19, new ElementModel('alcali','Lithium','리튬','Li',19));
elementData.set(20, new ElementModel('alkaline','Beryllium','베릴륨','Be',20));
elementData.set(31, new ElementModel('metalloids','Boron','붕소','B',31));
elementData.set(32, new ElementModel('non-metals','Carbon','탄소','C',32));
elementData.set(33, new ElementModel('non-metals','Nitrogen','질소','N',33));
elementData.set(34, new ElementModel('non-metals','Oxygen','산소','O',34));
elementData.set(35, new ElementModel('halogens','Fluorine','플루오린','F',35));
elementData.set(36, new ElementModel('noble-gases','Neon','네온','Ne',36));

elementData.set(37, new ElementModel('alcali','Sodium','나트륨','Na',37));
elementData.set(38, new ElementModel('alkaline','Magnesium','마그네슘','Mg',38));
elementData.set(49, new ElementModel('post-transition','Aluminum','알루미늄','Al',49));
elementData.set(50, new ElementModel('metalloids','Silicon','규소','Si',50));
elementData.set(51, new ElementModel('non-metals','Phosphorus','인','P',51));
elementData.set(52, new ElementModel('non-metals','Sulfur','황','S',52));
elementData.set(53, new ElementModel('halogens','Chlorine','염소','Cl',53));
elementData.set(54, new ElementModel('noble-gases','Argon','아르곤','Ar',54));

elementData.set(55, new ElementModel('alcali','Potassium','칼륨','K',55));
elementData.set(56, new ElementModel('alkaline','Calcium','칼슘','Ca',56));
elementData.set(57, new ElementModel('transition','Scandium','스칸듐','Sc',57));
elementData.set(58, new ElementModel('transition','Titanium','티타늄','Ti',58));
elementData.set(59, new ElementModel('transition','Vanadium','바나듐','V',59));
elementData.set(60, new ElementModel('transition','Chromium','크롬','Cr',60));
elementData.set(61, new ElementModel('transition','Manganese','망간','Mn',61));
elementData.set(62, new ElementModel('transition','Iron','철','Fe',62));
elementData.set(63, new ElementModel('transition','Cobalt','코발트','Co',63));
elementData.set(64, new ElementModel('transition','Nickel','니켈','Ni',64));
elementData.set(65, new ElementModel('transition','Copper','구리','Cu',65));
elementData.set(66, new ElementModel('transition','Zinc','아연','Zn',66));
elementData.set(67, new ElementModel('post-transition','Gallium','갈륨','Ga',67));
elementData.set(68, new ElementModel('metalloids','Germanium','게르마늄','Ge',68));
elementData.set(69, new ElementModel('metalloids','Arsenic','비소','As',69));
elementData.set(70, new ElementModel('non-metals','Selenium','셀레늄','Se',70));
elementData.set(71, new ElementModel('halogens','Bromine','브로민','Br',71));
elementData.set(72, new ElementModel('noble-gases','Krypton','크립톤','Kr',72));

elementData.set(73, new ElementModel('alcali','Rubidium','루비듐','Rb',73));
elementData.set(74, new ElementModel('alkaline','Strontium','스트론튬','Sr',74));
elementData.set(75, new ElementModel('transition','Yttrium','이트륨','Y',75));
elementData.set(76, new ElementModel('transition','Zirconium','지르코늄','Zr',76));
elementData.set(77, new ElementModel('transition','Niobium','나이오븀','Nb',77));
elementData.set(78, new ElementModel('transition','Molybdenum','몰리브데넘','Mo',78));
elementData.set(79, new ElementModel('transition','Technetium','테크네튬','Tc',79));
elementData.set(80, new ElementModel('transition','Ruthenium','루테늄','Ru',80));
elementData.set(81, new ElementModel('transition','Rhodium','로듐','Rh',81));
elementData.set(82, new ElementModel('transition','Palladium','팔라듐','Pd',82));
elementData.set(83, new ElementModel('transition','Silver','은','Ag',83));
elementData.set(84, new ElementModel('transition','Cadmium','카드뮴','Cd',84));
elementData.set(85, new ElementModel('post-transition','Indium','인듐','In',85));
elementData.set(86, new ElementModel('post-transition','Tin','주석','Sn',86));
elementData.set(87, new ElementModel('metalloids','Antimony','안티모니','Sb',87));
elementData.set(88, new ElementModel('metalloids','Tellurium','텔루륨','Te',88));
elementData.set(89, new ElementModel('halogens','Iodine','아이오딘','I',89));
elementData.set(90, new ElementModel('noble-gases','Xenon','제논','Xe',90));

elementData.set(91, new ElementModel('alcali','Cesium','세슘','Cs',91));
elementData.set(92, new ElementModel('alkaline','Barium','바륨','Ba',92));
elementData.set(93, new ElementModel('base','','','*La',93));
elementData.set(94, new ElementModel('transition','Hafnium','하프늄','Hf',94));
elementData.set(95, new ElementModel('transition','Tantalum','탄탈럼','Ta',95));
elementData.set(96, new ElementModel('transition','Tungsten','텅스텐','W',96));
elementData.set(97, new ElementModel('transition','Rhenium','레늄','Re',97));
elementData.set(98, new ElementModel('transition','Osmium','오스뮴','Os',98));
elementData.set(99, new ElementModel('transition','Iridium','이리듐','Ir',99));
elementData.set(100, new ElementModel('transition','Platinum','백금','Pt',100));
elementData.set(101, new ElementModel('transition','Gold','금','Au',101));
elementData.set(102, new ElementModel('transition','Mercury','수은','Hg',102));
elementData.set(103, new ElementModel('post-transition','Thallium','탈륨','Tl',103));
elementData.set(104, new ElementModel('post-transition','Lead','납','Pb',104));
elementData.set(105, new ElementModel('post-transition','Bismuth','비스무트','Bi',105));
elementData.set(106, new ElementModel('metalloids','Polonium','폴로늄','Po',106));
elementData.set(107, new ElementModel('halogens','Astatine','아스타틴','At',107));
elementData.set(108, new ElementModel('noble-gases','Radon','라돈','Rn',108));

elementData.set(109, new ElementModel('alcali','Francium','프랑슘','Fr',109));
elementData.set(110, new ElementModel('alkaline','Radium','라듐','Ra',110));
elementData.set(111, new ElementModel('base','','','**Ac',111));
elementData.set(112, new ElementModel('transition','Rutherfordium','러더퍼디움','Rf',112));
elementData.set(113, new ElementModel('transition','Dubnium','더브늄','Db',113));
elementData.set(114, new ElementModel('transition','Seaborgium','시보귬','Sg',114));
elementData.set(115, new ElementModel('transition','Bohrium','보륨','Bh',115));
elementData.set(116, new ElementModel('transition','Hassium','하슘','Hs',116));
elementData.set(117, new ElementModel('transition','Meitnerium','마이트너륨','Mt',117));
elementData.set(118, new ElementModel('transition','Darmstadtium','다름슈타튬','Ds',118));
elementData.set(119, new ElementModel('transition','Roentgenium','뢴트게늄','Rg',119));
elementData.set(120, new ElementModel('transition','Copernicium','코페르니슘','Cn',120));
elementData.set(121, new ElementModel('post-transition','Nihonium','니호늄','Nh',121));
elementData.set(122, new ElementModel('post-transition','Flerovium','플레로븀','Fl',122));
elementData.set(123, new ElementModel('post-transition','Moscovium','모스코븀','Mc',123));
elementData.set(124, new ElementModel('post-transition','Livermorium','리버모륨','Lv',124));
elementData.set(125, new ElementModel('halogens','Tennessine','테네신','Ts',125));
elementData.set(126, new ElementModel('noble-gases','Oganesson','오가네손','Og',126));


elementData.set(129, new ElementModel('base','','','*La',129));
elementData.set(130, new ElementModel('lanthanoids','Lanthanum','란타넘','La',130));
elementData.set(131, new ElementModel('lanthanoids','Cerium','세륨','Ce',131));
elementData.set(132, new ElementModel('lanthanoids','Praseodymium','프라세오디뮴','Pr',132));
elementData.set(133, new ElementModel('lanthanoids','Neodymium','네오디뮴','Nd',133));
elementData.set(134, new ElementModel('lanthanoids','Promethium','프로메튬','Pm',134));
elementData.set(135, new ElementModel('lanthanoids','Samarium','사마륨','Sm',135));
elementData.set(136, new ElementModel('lanthanoids','Europium','유로퓸','Eu',136));
elementData.set(137, new ElementModel('lanthanoids','Gadolinium','가돌리늄','Gd',137));
elementData.set(138, new ElementModel('lanthanoids','Terbium','터븀','Tb',138));
elementData.set(139, new ElementModel('lanthanoids','Dysprosium','디스프로슘','Dy',139));
elementData.set(140, new ElementModel('lanthanoids','Holmium','홀뮴','Ho',140));
elementData.set(141, new ElementModel('lanthanoids','Erbium','어븀','Er',141));
elementData.set(142, new ElementModel('lanthanoids','Thulium','툴륨','Tm',142));
elementData.set(143, new ElementModel('lanthanoids','Ytterbium','이터븀','Yb',143));
elementData.set(144, new ElementModel('lanthanoids','Lutetium','루테튬','Lu',144));

elementData.set(147, new ElementModel('base','','','**Ac',147));
elementData.set(148, new ElementModel('actinoids','Actinium','악티늄','Ac',148));
elementData.set(149, new ElementModel('actinoids','Thorium','토륨','Th',149));
elementData.set(150, new ElementModel('actinoids','Protactinium','프로탁티늄','Pa',150));
elementData.set(151, new ElementModel('actinoids','Uranium','우라늄','U',151));
elementData.set(152, new ElementModel('actinoids','Neptunium','넵투늄','Np',152));
elementData.set(153, new ElementModel('actinoids','Plutonium','플루토늄','Pu',153));
elementData.set(154, new ElementModel('actinoids','Americium','아메리슘','Am',154));
elementData.set(155, new ElementModel('actinoids','Curium','퀴륨','Cm',155));
elementData.set(156, new ElementModel('actinoids','Berkelium','버클륨','Bk',156));
elementData.set(157, new ElementModel('actinoids','Californium','캘리포늄','Cf',157));
elementData.set(158, new ElementModel('actinoids','Einsteinium','아인슈타이늄','Es',158));
elementData.set(159, new ElementModel('actinoids','Fermium','페르뮴','Fm',159));
elementData.set(160, new ElementModel('actinoids','Mendelevium','멘델레븀','Md',160));
elementData.set(161, new ElementModel('actinoids','Nobelium','노벨륨','No',161));
elementData.set(162, new ElementModel('actinoids','Lawrencium','로렌슘','Lr',162));


export default elementData;