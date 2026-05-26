import { Flower2, Sun, Leaf, Snowflake } from 'lucide-react';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Disease {
  id: string;
  name: string;
  pathogen: string;
  incubation: string;
  symptoms: string[];
  transmission: string[];
  prevention: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface SeasonData {
  id: Season;
  label: string;
  icon: any;
  color: string;
  bgColor: string;
  bgImage: string;
  description: string;
  diseases: Disease[];
}

export const seasonalData: Record<Season, SeasonData> = {
  spring: {
    id: 'spring',
    label: '春季 (Spring)',
    icon: Flower2,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    bgImage: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=2070&auto=format&fit=crop',
    description: '春季万物复苏，气温忽冷忽热，是各类呼吸道疾病和出疹性疾病的高发季节。',
    diseases: [
      {
        id: 'flu-spring',
        name: '流行性感冒 (流感)',
        pathogen: '流感病毒',
        incubation: '1-3天',
        symptoms: ['突发高热，体温可达39-40℃', '伴有畏寒、寒战', '头痛、肌肉酸痛、极度乏力', '食欲减退、咳嗽、咽痛'],
        transmission: ['飞沫传播（打喷嚏、咳嗽）', '接触传播（接触被污染的物品）'],
        prevention: ['接种流感疫苗是防范最有效的手段', '保持室内空气流通', '勤洗手，避免去人群密集场所'],
        severity: 'medium',
      },
      {
        id: 'chickenpox',
        name: '水痘',
        pathogen: '水痘-带状疱疹病毒',
        incubation: '10-21天 (平均14-16天)',
        symptoms: ['低热或中度发热', '皮肤成批出现红色斑丘疹、疱疹', '皮疹最终结痂，瘙痒明显', '向心性分布（躯干多，四肢少）'],
        transmission: ['飞沫传播', '直接接触传播（接触疱疹液）'],
        prevention: ['接种水痘疫苗（需接种两剂次）', '患儿需隔离至所有皮疹结痂变干', '保持皮肤清洁，避免抓挠防止继发感染'],
        severity: 'medium',
      },
      {
        id: 'hfmd-spring',
        name: '手足口病',
        pathogen: '肠道病毒 (以EV71和CoxA16常见)',
        incubation: '3-7天',
        symptoms: ['发热，婴幼儿常见', '口腔黏膜出现疱疹，咽痛拒食', '手、足、臀部出现皮疹或疱疹', '极少数可引发脑炎、心肌炎等重症'],
        transmission: ['消化道传播（粪-口途径）', '呼吸道飞沫传播', '密切接触传播'],
        prevention: ['接种EV71型手足口病疫苗（防重症）', '牢记：洗净手、喝开水、吃熟食、勤通风、晒衣被', '患儿常被隔离两周'],
        severity: 'high',
      }
    ],
  },
  summer: {
    id: 'summer',
    label: '夏季 (Summer)',
    icon: Sun,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    description: '夏季气温高、湿度大，非常适合肠道致病原滋生繁殖，是肠道疾病和虫媒传染病高发季。',
    diseases: [
      {
        id: 'herpangina',
        name: '疱疹性咽峡炎',
        pathogen: '肠道病毒 (柯萨奇A型病毒为主)',
        incubation: '3-5天',
        symptoms: ['急骤发热，甚至高热惊厥', '咽痛剧烈，吞咽困难', '流涎、厌食、呕吐', '软腭、悬雍垂等处可见红晕及水疱'],
        transmission: ['粪-口途径传播', '呼吸道飞沫传播', '密切接触传播'],
        prevention: ['夏季注意饮食和个人卫生', '高温时期避免过度疲劳', '多喝温凉水，给清淡流质饮食减轻咽痛'],
        severity: 'medium',
      },
      {
        id: 'dysentery',
        name: '细菌性痢疾',
        pathogen: '痢疾杆菌',
        incubation: '1-3天',
        symptoms: ['畏寒、发热', '腹痛、频繁腹泻（多为黏液脓血便）', '里急后重（想拉拉不出或拉不尽的感觉）', '部分严重可致中毒性痢疾（高热惊厥、休克等）'],
        transmission: ['粪-口途径传播（主要通过被污染的食物和水）'],
        prevention: ['不吃生冷及不洁食物，不喝生水', '饭前便后彻底洗手', '生熟砧板分开，防蝇灭蝇'],
        severity: 'high',
      },
      {
        id: 'encephalitis-b',
        name: '流行性乙型脑炎 (乙脑)',
        pathogen: '乙型脑炎病毒',
        incubation: '4-21天 (一般10-14天)',
        symptoms: ['起病急，高热（常达40℃以上）', '头痛、呕吐', '意识障碍、抽搐', '可能遗留神经系统后遗症'],
        transmission: ['蚊虫叮咬传播（主要为三带喙库蚊）'],
        prevention: ['按规定程序接种乙脑疫苗', '夏季全面做好防蚊灭蚊工作', '保持居住环境清洁，清理积水'],
        severity: 'high',
      }
    ],
  },
  autumn: {
    id: 'autumn',
    label: '秋季 (Autumn)',
    icon: Leaf,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    bgImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop',
    description: '秋季气候早晚凉爽，病毒相对较活跃，尤其是引起胃肠道不适的病毒极易广泛传播。',
    diseases: [
      {
        id: 'rotavirus',
        name: '秋季腹泻 (轮状病毒肠炎)',
        pathogen: '轮状病毒',
        incubation: '1-3天',
        symptoms: ['早期可有发热、咳嗽等感冒症状', '主要表现为呕吐，随后出现水样或蛋花汤样腹泻', '每天腹泻数次到十几次', '容易造成脱水和电解质紊乱'],
        transmission: ['粪-口途径传播为主'],
        prevention: ['低龄儿童可口服轮状病毒疫苗', '奶瓶、餐具需定期高温消毒', '腹泻期间及时补充口服补液盐（ORS），预防脱水'],
        severity: 'medium',
      },
      {
        id: 'norovirus',
        name: '诺如病毒感染',
        pathogen: '诺如病毒',
        incubation: '12-48小时',
        symptoms: ['突然发病，儿童常以呕吐为主要症状（多于腹泻）', '可能伴有恶心、腹痛、头痛、低热', '自限性疾病，一般2-3天可好转'],
        transmission: ['被污染的食物和水', '接触患者排泄物或呕吐物引发的飞沫'],
        prevention: ['注意饮食卫生，贝类海鲜等必须彻底煮熟', '处理呕吐物要戴口罩和手套，规范使用含氯消毒剂', '饭前便后规范洗手（免洗洗手液对诺如无效）'],
        severity: 'medium',
      }
    ]
  },
  winter: {
    id: 'winter',
    label: '冬季 (Winter)',
    icon: Snowflake,
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    bgImage: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2070&auto=format&fit=crop',
    description: '冬季气温低下，门窗紧闭导致空气流通差，是各类呼吸道传染病进入高发甚至是爆发的时期。',
    diseases: [
      {
        id: 'flu-winter',
        name: '流行性感冒',
        pathogen: '流感病毒 (多为甲流、乙流)',
        incubation: '1-3天',
        symptoms: ['高热、头痛、肌肉酸痛、乏力等全身症状明显', '咽痛、干咳', '儿童易并发肺炎、中耳炎等'],
        transmission: ['呼吸道飞沫传播', '接触被病毒污染的物品'],
        prevention: ['每年入冬前尽早接种流感疫苗', '冬季定期开窗通风（每日2-3次，每次20-30分钟）', '保持良好手卫生'],
        severity: 'medium',
      },
      {
        id: 'rsv',
        name: '呼吸道合胞病毒 (RSV)',
        pathogen: '呼吸道合胞病毒',
        incubation: '4-5天',
        symptoms: ['主要表现为流涕、咳嗽、打喷嚏、轻微发热', '多数婴幼儿可发展为毛细支气管炎或肺炎', '剧烈咳嗽，伴有喘息、呼吸急促'],
        transmission: ['飞沫传播', '接触传播'],
        prevention: ['1岁以下婴儿及早产儿尤其要加强防护', '提倡母乳喂养增强免疫力', '避免去人多拥挤的室内，家中有感冒者应自觉戴口罩分离'],
        severity: 'high',
      },
      {
        id: 'mumps',
        name: '流行性腮腺炎',
        pathogen: '腮腺炎病毒',
        incubation: '14-25天 (平均18天)',
        symptoms: ['发热、畏寒、头痛', '主要表现为耳下腮腺肿大、胀痛', '张口或咀嚼酸性食物时疼痛加剧', '可并发脑膜炎、睾丸炎/卵巢炎等'],
        transmission: ['直接接触、飞沫、唾液', '污染的衣物玩具传播'],
        prevention: ['按免疫程序接种麻腮风（MMR）联合疫苗', '一旦确诊需隔离至腮腺肿大完全消退', '饮食清淡，避免进食酸性及硬质食物'],
        severity: 'high',
      }
    ]
  }
};
