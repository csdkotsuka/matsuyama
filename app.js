// MATSUYAMA & EHIME GLOBAL DISCOVERY PORTAL - APP DATA & LOGIC

const siteData = {
  ja: {
    siteTitle: "MATSUYAMA DISCOVERY",
    siteSubtitle: "日本最古の湯と文学、極彩色の美意識、そして瀬戸内・宇和海の恵み",
    heroBadge: "愛媛・松山を世界へ発信する公式ディスカバリーポータル",
    heroDesc: "3,000年の歴史を誇る道後温泉、近代文学を拓いた正岡子規と夏目漱石、蜷川実花が彩るアートな温泉街、日本一の柑橘王国、そして絶品の鯛めし。知れば知るほど魅了される、松山・愛媛の奥深い物語を巡る旅へ。",
    quickStats: [
      { label: "道後温泉の歴史", value: "3,000+", unit: "年" },
      { label: "街中の俳句ポスト", value: "90+", unit: "箇所以上" },
      { label: "愛媛の柑橘品種数", value: "40+", unit: "種以上" },
      { label: "現存天守の松山城", value: "1602", unit: "年創架" }
    ],
    tabs: [
      { id: "history", icon: "castle", label: "歴史と物語", subtitle: "道後温泉・正岡子規・夏目漱石・松山城" },
      { id: "haiku", icon: "feather", label: "俳句と文化", subtitle: "ことばのまち・正岡子規・俳句甲子園" },
      { id: "art", icon: "palette", label: "芸術と現代アート", subtitle: "蜷川実花・道後オンセナート・建築・音楽" },
      { id: "citrus", icon: "citrus", label: "農産物・柑橘王国", subtitle: "みかん・紅まどんな・蛇口からみかんジュース" },
      { id: "fishery", icon: "fish", label: "水産物・極上の美味", subtitle: "宇和島鯛めし・松山鯛めし・八幡浜じゃこ天" },
      { id: "trivia", icon: "sparkles", label: "意外なトリビア", subtitle: "子規と野球・中村知事と歌舞伎役者の真相" }
    ],
    sections: {
      history: {
        title: "3,000年の歴史が息づく、文学と城の都",
        desc: "古代の神話時代から続く温泉、明治の文豪たちが愛した風情、そして街を見守り続ける名城。",
        items: [
          {
            id: "dogo-onsen",
            title: "道後温泉本館",
            tag: "国指定重要文化財",
            summary: "日本最古、3,000年の歴史を誇る名湯。2024年7月に約5年半の保存修理を終え、全館営業を完全再開。",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
            fullText: `道後温泉は『日本書紀』や『万葉集』にも登場する日本最古の温泉地です。聖徳太子も来浴し、その霊泉を讃えた碑文を遺したと伝えられます。
その象徴である「道後温泉本館」は、1894年（明治27年）に棟梁・坂本又八郎によって建てられた木造三層楼の近代和風建築。
2019年から約5年半に及ぶ大規模な保存修理工事（重要文化財の公衆浴場を営業しながら保存修理を行う世界初の試み）を実施し、2024年7月11日についに全館営業を再開しました。
最上層には時を告げる「振鷺閣（しんろかく）」があり、朝・昼・夕に打ち鳴らされる「刻太鼓（ときだいこ）」の音は環境省「残したい日本の音風景100選」に選ばれています。`
          },
          {
            id: "soseki-botchan",
            title: "夏目漱石と名作『坊っちゃん』",
            tag: "明治の文豪と松山",
            summary: "漱石が英語教師として赴任した松山での体験から誕生。痛快無比な青春小説の舞台。",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
            fullText: `1895年（明治28年）、28歳の夏目漱石は愛媛県尋常中学校（現在の松山東高校）の英語教師として松山に赴任しました。親友の正岡子規の下宿「愚陀仏庵（ぐだぶつあん）」で52日間の同居生活を送り、俳句の指導を受けながら思索を深めました。
この松山での実体験をもとに1906年に発表されたのが国民的小説『坊っちゃん』です。
作中では松山を「マッチ箱のような汽車」「狸や赤シャツの跋扈する片田舎」とユーモアたっぷりに描写していますが、漱石自身は道後温泉を毎日訪れるほど愛していました。今も市内を走る「坊っちゃん列車」や銘菓「坊っちゃん団子」など、松山のアイデンティティとして息づいています。`
          },
          {
            id: "matsuyama-castle",
            title: "松山城（勝山城）",
            tag: "日本現存12天守",
            summary: "標高132mの勝山山頂にそびえる名城。江戸時代以前に建造された天守を有する貴重な城郭建築の傑作。",
            image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
            fullText: `松山城は、賤ヶ岳の合戦で武功を挙げた加藤嘉明が1602年から約四半世紀をかけて築城しました。
日本にわずか12基しか残っていない「現存天守」の一つであり、大天守・小天守・隅櫓を渡櫓で結んだ「連立式天守」の最高峰と称されます。
城郭内には重要文化財に指定された建造物が21棟あり、攻守の工夫が凝らされた石垣の美しさは圧巻。
ロープウェイやリフトで山頂に登ると、瀬戸内海から松山平野までを一望できる大パノラマが広がります。ミシュラン・グリーンガイド・ジャポンでも二つ星を獲得しています。`
          },
          {
            id: "saka-no-ue-no-kumo",
            title: "『坂の上の雲』の舞台",
            tag: "司馬遼太郎の歴史小説",
            summary: "松山出身の秋山好古・真之兄弟と正岡子規。近代日本の黎明期を駆け抜けた三人の青春の記憶。",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
            fullText: `司馬遼太郎の傑作歴史小説『坂の上の雲』。その主人公である日本騎兵の父・秋山好古、日本海海戦の作戦参謀・秋山真之、そして近代文学の革新者・正岡子規は、いずれも松山藩士の家に生まれた同郷の友でした。
松山市内には、彼らの生誕地や、安藤忠雄氏の設計による三角形の独創的な外観が印象的な「坂の上の雲ミュージアム」があり、明治の近代化を情熱とともに駆け抜けた人々の精神に触れることができます。`
          }
        ]
      },
      haiku: {
        title: "世界でいちばん短い詩、俳句の聖地",
        desc: "正岡子規が革新を起こし、高浜虚子や河東碧梧桐へと受け継がれた「ことばのまち・松山」。",
        items: [
          {
            id: "shiki-revolution",
            title: "正岡子規と近代俳句の夜明け",
            tag: "近代短詩の父",
            summary: "旧弊に囚われていた俳句や短歌を「写生」の思想で現代文学へと蘇らせた天才文学者。",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
            fullText: `正岡子規（1867-1902）は松山城下の武士の家に生まれました。
当時、娯楽の座興として陳腐化していた連句・俳諧に対し、西洋絵画のリアリズムに影響を受けた「写生」を提唱。ありのままの自然や人生の真実を詠む新しい文芸として「俳句」「短歌」を近代文学の地位へと高めました。
脊椎カリエスという重い病と闘いながら、病床の六畳間から数々の傑作と随筆（『病牀六尺』『仰臥漫録』）を遺し、35歳で早世するまで日本の言葉の地平を広げ続けました。`
          },
          {
            id: "haiku-post",
            title: "街のいたるところにある「俳句ポスト」",
            tag: "全国・世界から投句",
            summary: "道後温泉、松山城、フェリーや空港など市内外90箇所以上に設置。誰でもいつでも一句詠んで投句できる街。",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
            fullText: `松山市では、1968年（昭和43年）に松山城に第1号が設置されて以来、主要観光地、JR駅、路面電車の停留所、道後温泉の旅館街、さらには空港や松山観光港、さらには海外（ドイツ・フライブルクや台湾・台北など）にも「俳句ポスト」が設置されています。
年間数万通もの句が投じられ、入選句は季刊誌や市ホームページで発表されます。
日常のふとした感動を五・七・五に詠む文化が、街全体に呼吸のように息づいています。`
          },
          {
            id: "haiku-koshien",
            title: "全国高校俳句選手権「俳句甲子園」",
            tag: "若き熱闘の詩",
            summary: "全国の高校生が松山の大舞台に集い、自作の俳句と舌戦（ディベート）で勝敗を決する知的格闘技。",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
            fullText: `毎年夏に松山市で開催される「俳句甲子園（全国高等学校俳句選手権大会）」。
1チーム5人の高校生が兼題に沿って詠んだ句を披露し、お互いの句の鑑賞・批評を戦わせる熱いディベートバトルです。審査員には現代を代表する錚々たる俳人が名を連ねます。
単なる言葉遊びではなく、17音に込められた意図や情景描写の深さを論理的に伝え合う青春の熱量は、全国の文芸ファンを魅了しています。映画化や漫画化もされるなど松山の夏の風物詩です。`
          }
        ]
      },
      art: {
        title: "歴史と前衛が交差する、最先端のアートトリップ",
        desc: "蜷川実花が彩る極彩色の温泉街から、安藤忠雄建築、市民ミュージカル劇場まで。",
        items: [
          {
            id: "ninagawa-dogo",
            title: "蜷川実花 × 道後温泉",
            tag: "現代アートプロジェクト",
            summary: "写真家・映画監督の蜷川実花氏が手がけた極彩色の花と光の世界。歴史ある温泉街が現代アートの美術館へと変貌。",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
            fullText: `道後温泉では、2014年以降「道後オンセナート」をはじめとする大型アートプロジェクトを継続して展開しています。
中でも世界的な反響を呼んだのが、写真家・映画監督の蜷川実花氏とのコラボレーションです。
保存修理中の道後温泉本館を包む巨大な覆い幕に、蜷川氏が撮影した約230輪の鮮やかな花々の写真コラージュを大胆に展開。
さらに、道後温泉の旅館客室を丸ごと極彩色の作品空間に仕立てたアートルームや、道後温泉別館「飛鳥乃湯泉」の中庭を鮮やかなフラワーグラフィックで埋め尽くすインスタレーションなど、3,000年の伝統と現代のビビッドな美意識が見事に融合しました。`
          },
          {
            id: "dogo-onsenart",
            title: "道後オンセナート & アートフェス",
            tag: "街歩き型オープンミュージアム",
            summary: "草間彌生、荒木経惟、大竹伸朗ら世界的アーティストが参加。「温泉×アート」の世界的潮流を創出。",
            image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
            fullText: `道後オンセナート（Dogo Onsenart）は、「温泉」と「最先端アート」という一見相反する要素を掛け合わせた画期的なアートフェスティバルです。
草間彌生のアイコニックな水玉が旅館の部屋を覆い尽くし、荒木経惟の写真が街の行灯を彩り、大竹伸朗や山口晃が浴場空間をインスタレーションへと昇華させました。
美術館の中に閉じこもるのではなく、浴衣を着て下駄を鳴らしながら街を散策する中で作品に出会える「街歩き型アート」の金字塔となっています。`
          },
          {
            id: "ando-architecture",
            title: "安藤忠雄建築：坂の上の雲ミュージアム",
            tag: "世界的建築の美",
            summary: "松山城の麓の自然に溶け込む、空中階段と幾何学三角形のガラス空間。建築ファン必見の名所。",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            fullText: `松山城の緑豊かな山麓に建つ「坂の上の雲ミュージアム」は、世界的な建築家・安藤忠雄氏の設計によるもの。
三角形の平面形状を採用し、内部には支柱のないスロープ（空中階段）が螺旋状に緩やかに上昇していきます。
打ち放しコンクリートの静謐な質感と、外の緑を反射する巨大なガラスカーテンウォールが絶妙に調和し、建物そのものが『坂の上の雲』の目指した高みと近代精神を体現しています。`
          },
          {
            id: "botchan-theater",
            title: "坊っちゃん劇場 & 音楽文化",
            tag: "地域発信の舞台芸術",
            summary: "日本で唯一、四国・愛媛の歴史文化を題材にしたオリジナルミュージカルを通年上演する専用劇場。",
            image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛県東温市（松山市に隣接）にある「坊っちゃん劇場」は、地域の歴史や人物、伝説をモチーフにした本格的なオリジナルミュージカルを1年間にわたり常設ロングラン上演する、日本でも稀有な舞台芸術拠点です。
また、松山市は「ことばのまち」であると同時に吹奏楽や合唱、クラシック音楽の教育が盛んな文化都市でもあり、愛媛交響楽団や松山市総合コミュニティセンター、市民会館などを舞台に豊かな音楽活動が息づいています。`
          }
        ]
      },
      citrus: {
        title: "太陽と潮風が育む、奇跡の柑橘王国・愛媛",
        desc: "生産量・品種数ともに日本トップクラス。「柑橘の楽園」が生んだ驚きの美味しさと遊び心。",
        items: [
          {
            id: "citrus-paradise",
            title: "愛媛が「柑橘王国」と呼ばれる理由",
            tag: "3つの太陽が育む味",
            summary: "空から降り注ぐ太陽、瀬戸内海の海面からの反射光、石垣からの輻射熱。「3つの太陽」が極甘みかんを作る。",
            image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛県は40種類以上の柑橘を栽培する日本一の柑橘王国です。
美味しさの秘密は「3つの太陽」。① 南国のまぶしい太陽光、② 穏やかな瀬戸内海・宇和海の水面が鏡のように跳ね返す反射光、③ 段々畑の石垣が蓄えた熱の輻射光。
この3つの光と、水はけの良い急傾斜の段々畑、海からのミネラルを含んだ潮風が、驚くほど濃厚でコクのある柑橘を育て上げます。一年中、いつでも旬の異なる品種のみかんを味わうことができます。`
          },
          {
            id: "premium-citrus",
            title: "奇跡の高級柑橘カルテット",
            tag: "紅まどんな・甘平・せとか・伊予柑",
            summary: "一口食べれば常識が覆る！ゼリーのようにとろける果肉と極上のアロマを持つ愛媛オリジナル品種。",
            image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛が誇る柑橘は、一般的な温州みかんだけではありません。
・【紅まどんな（愛媛果試第28号）】：12月のわずかな期間だけ出回る至高の逸品。じょうのう（薄皮）が極めて薄く、まるで上質なゼリーをスプーンですくって食べているかのような官能的な食感。
・【甘平（かんぺい）】：薄皮の中に甘い大粒の果肉がぎっしり詰まった、プチプチ弾ける高糖度みかん。
・【せとか】：「柑橘の大トロ」と称され、濃厚な甘みと溢れ出す果汁、芳醇な香りが特徴。
・【伊予柑（いよかん）】：愛媛の旧国名「伊予」を冠した名品。「いい予感」の語呂合わせでも親しまれる爽やかな香り。`
          },
          {
            id: "juice-faucet",
            title: "都市伝説の現実化！「蛇口からみかんジュース」",
            tag: "愛媛名物体験スポット",
            summary: "「愛媛の家庭では蛇口をひねるとポンジュースが出る」という昭和のジョークが本物の観光体験に！",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
            fullText: `かつて全国で都市伝説として語られた「愛媛の家には水とお湯のほかに、みかんジュースが出る蛇口があるらしい」。
この冗談を本気で実現したのが、松山空港や道後温泉観光案内所、ロープウェイ街の専門店（「10FACTORY」「えひめ愛顔の観光物産館」など）に設置されたジュース蛇口です！
蛇口のレバーをひねると、鮮やかなオレンジ色の100%ストレートみかん果汁がトクトクとコップに注がれます。温州、伊予柑、不知火など複数種類の蛇口から飲み比べができる店舗もあり、国内外の旅行者に大人気の体験スポットです。`
          }
        ]
      },
      fishery: {
        title: "瀬戸内海と宇和海がもたらす、至高の海の幸",
        desc: "潮の流れが育む日本一の真鯛。2大「鯛めし」の文化と、名物「じゃこ天」のソウルフード。",
        items: [
          {
            id: "taimeshi-battle",
            title: "愛媛が誇る2大「鯛めし」大対決！",
            tag: "郷土料理の東西横綱",
            summary: "【宇和島鯛めし】生の鯛刺身を特製タレと生卵で！ vs 【松山鯛めし】昆布出汁で丸ごと炊き込む上品な味！",
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛県は養殖・天然ともに全国トップクラスの真鯛の産地。その鯛を味わう郷土料理「鯛めし」には、実は全く異なる2つのスタイルが存在します。
■【宇和島鯛めし（南予風）】：
もとは宇和海の水軍や漁師が船上で酒盛りをした後、火を使わずに手早く食べたのが始まり。新鮮な真鯛の刺身を、醤油・みりん・出汁に生卵を溶いた特製タレに漬け込み、海藻や胡麻、ネギとともに温かいご飯にぶっかけてかき込む豪快かつ贅沢な逸品！
■【松山鯛めし（中予風）】：
素焼きにした新鮮な真鯛を一尾丸ごと、昆布出汁とお米とともに土鍋などで炊き上げます。鯛の芳醇な旨味がご飯一粒一粒に染み渡り、ふっくらほぐした身と香ばしいおこげを上品に味わう伝統の味です。`
          },
          {
            id: "jakoten",
            title: "宇和海・八幡浜のソウルフード「じゃこ天」",
            tag: "カルシウム満点の名物",
            summary: "小魚（ほたるじゃこ等）を骨ごとすり身にして木枠で型取り、菜種油で揚げた素朴で力強い味。",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
            fullText: `じゃこ天（雑魚天）は、宇和海で獲れる新鮮な小魚「ホタルジャコ（地元名：ハランボ）」などを頭と内臓だけ除き、皮や骨ごと石臼ですり潰して油で揚げた練り製品です。
一口かじるとシャリシャリとした骨の小気味よい食感と、濃厚な魚の旨味が口いっぱいに広がります。
軽く炙って生姜醤油や大根おろしを添え、地酒の辛口とともにいただくのが地元流の最高の楽しみ方です。`
          },
          {
            id: "uwakai-bounty",
            title: "潮流が生み出す海の宝石（太刀魚・スマ・真珠）",
            tag: "宇和海・瀬戸内の恵み",
            summary: "「全身トロ」の幻の高級魚スマ（伊予の媛貴海）、太刀魚の巻焼き、そして世界最高品質の宇和島真珠。",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛の海はリアス式海岸と激しい潮流に恵まれ、魚介の宝庫です。
愛媛県が完全養殖に成功した高級魚スマ「伊予の媛貴海（ひめたかみ）」は、きめ細やかな脂が乗って「全身トロ」と絶賛される極上魚。
また、瀬戸内海の銀色に輝く太刀魚を竹竹に巻きつけて秘伝のタレで焼いた「太刀魚の巻焼き」や、日本一の生産量を誇る「宇和島真珠（アコヤ真珠）」など、海の恵みが工芸から美食まであふれています。`
          }
        ]
      },
      trivia: {
        title: "知られざる松山・愛媛の意外な真実と歴史秘話",
        desc: "「えっ、本当！？」と驚く、文学・スポーツ・人物のディープなエピソード。",
        items: [
          {
            id: "shiki-baseball",
            title: "正岡子規と野球（ベースボール）の深すぎる絆",
            tag: "野球殿堂入りした俳人",
            summary: "雅号に「野球（のぼーる）」と名乗り、「打者」「走者」「直球」を翻訳考案！2002年野球殿堂入り。",
            image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80",
            fullText: `【雅号「野球（のぼーる）」の誕生】
正岡子規は東大予備門時代、日本に伝わったばかりの「ベースボール」に熱狂しました。ポジションはキャッチャー。
自分の幼名「升（のぼる）」をもじって、明治23年（1890年）に自身の雅号（ペンネーム）として「野球（野・球／の・ぼーる）」を使い始めました。
これは中馬庚（ちゅうまかのえ）が「baseball」の訳語として「野球（やきゅう）」を公式考案する数年前の出来事です！

【数々の野球用語の翻訳と普及】
子規は新聞や随筆の中で、まだルールの知られていなかった野球の面白さを熱烈に解説しました。
「打者」「走者」「四球」「直球」「飛球」といった現在も使われている日本語の野球用語の多くは、子規が考案・紹介したものです。
短歌でも「九つの人あつまりて 一つの毬 打ちて走るが いと楽しきかな」「今やかの 三輪の籬の 桜花 咲きぬらむとぞ 思ひやるかな」と詠み、日本で初めて野球を文学に詠み込んだ人物となりました。

【野球殿堂入りと松山の野球聖地】
2002年、子規の野球普及への絶大な功績を讃え、文学者として初めて「野球殿堂（特別表彰）」入りを果たしました。
松山市の中央公園には子規にちなんだ大球場「坊っちゃんスタジアム」と「マドンナスタジアム」があり、プロ野球のオールスターやヤクルトスワローズのキャンプ地として熱気にあふれています。`
          },
          {
            id: "governor-kabuki",
            title: "「中村愛媛県知事は歌舞伎役者！？」の真相大解剖",
            tag: "よくある勘違いと愛媛の文化",
            summary: "「愛媛の知事って歌舞伎の人？」という噂の正体は？名門「中村時蔵」との偶然の一致と、愛媛の芝居小屋「内子座」の物語。",
            image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
            fullText: `【噂の真相：なぜ「歌舞伎役者」と噂されるのか？】
「愛媛県知事の中村さんって、歌舞伎役者だったっけ？」と耳にすることがあります。
結論から言うと、現在愛媛県知事を務める「中村時広（なかむら ときひろ）」氏は歌舞伎役者ではありません！
ではなぜこの噂が生まれたのでしょうか？理由は3つの要素が重なったためです。

① 歌舞伎界最高峰の名跡「中村時蔵（なかむら ときぞう）」との類似：
歌舞伎の名門「萬屋（よろずや）」には、人間国宝も輩出した大幹部「中村時蔵」という非常に著名な名跡があります（2024年には六代目中村時蔵が襲名披露）。「中村」という名字と「時」で始まる名前が酷似していること、また端正な佇まいから、テレビ等で見かけた人が「歌舞伎の中村時蔵さん（またはその一族）？」と錯覚するケースが後を絶ちません。

② 愛媛県が誇る国の重要文化財「内子座」と歌舞伎の深い結びつき：
愛媛県内子町には、1916年（大正5年）に建てられた現役の本格的木造芝居小屋「内子座（うちこざ）」があります。回り舞台や花道、奈落を備えた本物の芝居小屋として全国的に有名で、定期的に「内子座歌舞伎」が開催され、松竹大歌舞伎の一流役者（中村座や中村一門を含む）が愛媛を訪れて熱演します。愛媛県と歌舞伎の強い結びつきのイメージが、知事の名字とリンクしたのです。

③ 中村時広知事の本当の経歴：
慶應義塾大学法学部を卒業後、三菱商事に勤務。その後、政治の道へ進み、愛媛県議会議員、衆議院議員、松山市長（3期11年）を経て、2010年より愛媛県知事に就任（現在4期目）。自転車文化の振興（しまなみ海道サイクリングの国際化）や愛媛ブランドの世界展開に熱血的に取り組む、生粋の実務派リーダーです！父の中村時雄氏も元松山市長・衆議院議員でした。`
          },
          {
            id: "botchan-paradox",
            title: "漱石は松山を悪口だらけで書いたのに、なぜ愛される？",
            tag: "松山人の温かいユーモア",
            summary: "「不浄地」「マッチ箱のような汽車」と書かれながらも、松山市民が『坊っちゃん』を誇りにする理由。",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
            fullText: `夏目漱石の『坊っちゃん』を開くと、主人公の坊っちゃんは赴任先の松山について「やたら狭い」「不潔だ」「ろくな町じゃない」と散々な毒舌を連発しています。
普通なら住民が怒っても不思議ではないところ、松山の人々は腹を立てるどころか大喜びで受け入れました！
汽車を「坊っちゃん列車」、団子を「坊っちゃん団子」、球場を「坊っちゃんスタジアム」と命名し、街の最高のマスコットにしてしまったのです。
これこそが、温暖な気候と豊かな海山の幸に恵まれて育まれた、松山人の大らかでユーモアに満ちた「おもてなし精神」の証と言われています。`
          }
        ]
      }
    },
    interactive: {
      quizTitle: "正岡子規の「ベースボール」訳語クイズ",
      quizDesc: "子規が考案・紹介した野球用語を当ててみよう！",
      haikuGenTitle: "あなただけの「松山・愛媛の句」を詠む",
      haikuGenDesc: "道後温泉、みかん、城、海の情景を組み合わせて一句詠んでみましょう。",
      taimeshiTitle: "あなたの好みはどっち？鯛めし診断",
      taimeshiDesc: "今日のあなたの気分にぴったりの愛媛の鯛めしを提案します。"
    },
    footer: {
      about: "MATSUYAMA & EHIME DISCOVERY PORTAL",
      desc: "本サイトは、愛媛県松山市および愛媛が誇る歴史・文学・現代アート・食文化・意外な魅力を全世界へ広く紹介するために制作されたオープンプロジェクトです。",
      githubNote: "GitHub公開対応レポジトリ。世界中からのコントリビューションや翻訳を歓迎します。",
      copyright: "© MATSUYAMA DISCOVERY PROJECT. Crafted with pride for Matsuyama & Ehime."
    }
  },

  en: {
    siteTitle: "MATSUYAMA DISCOVERY",
    siteSubtitle: "Where 3,000 Years of Sacred Onsen, Literature, Vivid Art & Citrus Splendor Converge",
    heroBadge: "The Official Global Portal to Matsuyama & Ehime, Japan",
    heroDesc: "From Dogo Onsen—Japan’s oldest hot spring with 3,000 years of myth—to the birthplace of modern Haiku, Mika Ninagawa's kaleidoscopic floral art, the world's premier citrus kingdom, and the battle of two iconic Sea Bream rice bowls. Uncover the untold stories of Matsuyama.",
    quickStats: [
      { label: "Dogo Onsen History", value: "3,000+", unit: "Years" },
      { label: "Public Haiku Postboxes", value: "90+", unit: "Locations" },
      { label: "Citrus Varieties in Ehime", value: "40+", unit: "Cultivars" },
      { label: "Matsuyama Castle", value: "1602", unit: "Founded" }
    ],
    tabs: [
      { id: "history", icon: "castle", label: "History & Legends", subtitle: "Dogo Onsen, Soseki, Shiki & Castle" },
      { id: "haiku", icon: "feather", label: "Haiku & Words", subtitle: "City of Poetry, Shiki Masaoka, Haiku Koshien" },
      { id: "art", icon: "palette", label: "Art & Creativity", subtitle: "Mika Ninagawa, Dogo Onsenart, Tadao Ando" },
      { id: "citrus", icon: "citrus", label: "Citrus Kingdom", subtitle: "Mikan, Beni Madonna, Juice from the Tap" },
      { id: "fishery", icon: "fish", label: "Seafood & Flavors", subtitle: "Uwajima vs Matsuyama Taimeshi, Jakoten" },
      { id: "trivia", icon: "sparkles", label: "Surprising Trivia", subtitle: "Shiki's Baseball & The Governor Kabuki Rumor" }
    ],
    sections: {
      history: {
        title: "3,000 Years of Timeless Springs, Feudal Castle & Literature",
        desc: "Bathe in holy waters praised by ancient gods, step into Meiji literary masterworks, and gaze over the Inland Sea from an original samurai keep.",
        items: [
          {
            id: "dogo-onsen",
            title: "Dogo Onsen Honkan",
            tag: "National Important Cultural Property",
            summary: "Japan's oldest hot spring with over 3,000 years of verified history. Fully reopened in July 2024 after a meticulous 5.5-year conservation project.",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
            fullText: `Mentioned in the ancient 8th-century chronicles 'Nihon Shoki' and 'Man'yoshu', Dogo Onsen is revered as Japan's very first spa. Prince Shotoku visited in 596 AD, marveling at its healing waters.
The crown jewel is the Dogo Onsen Honkan (Main Building), built in 1894 by master carpenter Matahachiro Sakamoto. It is a three-story timber architectural masterpiece said to have inspired Hayao Miyazaki's acclaimed Ghibli film 'Spirited Away'.
Between 2019 and July 2024, the building underwent an unprecedented conservation and seismic retrofit—staying open for public bathing while work proceeded—and officially celebrated its grand full reopening on July 11, 2024.
Its uppermost tower, Shinrokaku, houses the Tokidaiko drum, rung three times daily to mark time across the nostalgic hot spring town.`
          },
          {
            id: "soseki-botchan",
            title: "Natsume Soseki & 'Botchan'",
            tag: "Meiji Literary Giant",
            summary: "Written by Japan's preeminent modern novelist based on his teaching year in Matsuyama, creating a timeless masterpiece of youth rebellion.",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
            fullText: `In 1895, at age 28, Natsume Soseki arrived in Matsuyama as an English teacher at the local middle school. He spent 52 days sharing a lodging ('Gudabutsu-an') with his close friend, the dying literary revolutionary Masaoka Shiki, learning haiku and debating philosophy.
This experience inspired his 1906 classic novel 'Botchan'—a brisk, hilarious story of a brash Tokyo newcomer confronting eccentric small-town teachers.
Though the novel cheekily roasted Matsuyama's eccentricities and called the steam train a 'matchbox', Soseki loved soaking in Dogo Onsen every day. Today, the town lovingly embraces his legacy with retro 'Botchan Trains' running through city avenues and colorful tri-flavor 'Botchan Dango' sweets.`
          },
          {
            id: "matsuyama-castle",
            title: "Matsuyama Castle",
            tag: "1 of 12 Original Keeps in Japan",
            summary: "Towering atop Mt. Katsuyama at 132m, this magnificent fortress is one of the rare surviving authentic keeps constructed before the Edo era.",
            image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
            fullText: `Begun in 1602 by samurai warlord Yoshiaki Kato, Matsuyama Castle took 25 years to complete.
It is celebrated as one of only twelve castles across Japan retaining their authentic pre-Edo wooden main keeps. It features a complex 'Renritsushiki' (connected) structure linking main and sub keeps via defensive turrets.
Twenty-one structures inside the grounds are designated National Important Cultural Properties. Ascending via modern cable car or single-chair open lift delivers visitors into defensive labyrinth gates and panoramic vistas spanning the emerald Seto Inland Sea.`
          },
          {
            id: "saka-no-ue-no-kumo",
            title: "Clouds Above the Hill ('Saka no Ue no Kumo')",
            tag: "Epic Modern Epic by Ryotaro Shiba",
            summary: "The legendary lives of brothers Yoshifuru and Saneyuki Akiyama with Masaoka Shiki, who helped steer Japan into the modern global era.",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
            fullText: `Ryotaro Shiba's best-selling historical epic 'Clouds Above the Hill' chronicles three boys raised in impoverished samurai homes in Matsuyama: Yoshifuru Akiyama (father of Japanese cavalry), his younger brother Saneyuki Akiyama (master strategist of the Battle of Tsushima), and their brilliant classmate Masaoka Shiki.
The Saka no Ue no Kumo Museum, masterminded by world-renowned architect Tadao Ando, houses artifacts documenting their relentless pursuit of knowledge during the Meiji dawn.`
          }
        ]
      },
      haiku: {
        title: "The Capital of the World's Shortest Poetry",
        desc: "Where Masaoka Shiki reinvented Haiku as high modern art, and verse is woven into daily urban life.",
        items: [
          {
            id: "shiki-revolution",
            title: "Masaoka Shiki: Father of Modern Haiku",
            tag: "Literary Innovator",
            summary: "Liberated stale poetic traditions through the concept of 'Shasei' (sketching from reality), elevating 17-syllable verse into modern world literature.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
            fullText: `Born in Matsuyama in 1867, Masaoka Shiki single-handedly revolutionized Japanese poetry.
Disillusioned by rigid Edo-period wordplay, he applied Western realism to create 'Shasei'—sketching life and nature with unvarnished honesty.
Even as spinal tuberculosis confined him to a tiny tatami room, he penned breathtaking poems, essays, and journals until his untimely passing at age 35, leaving an immortal imprint on global literature.`
          },
          {
            id: "haiku-post",
            title: "Over 90 Haiku Postboxes Scattered Across the City",
            tag: "An Open Canvas for Verses",
            summary: "Postboxes awaiting your 17-syllable thoughts at historic temples, tram stops, onsen baths, and ferry docks.",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
            fullText: `Since the very first red wooden Haiku Postbox was erected atop Matsuyama Castle in 1968, the network has expanded to over 90 locations throughout the city, Matsuyama Airport, high-speed ferries, and even sister cities abroad in Germany and Taiwan.
Anyone—local resident or foreign traveler—can jot down a poem on provided paper slips and drop it in. Thousands of submissions are judged annually, celebrating the poetic spark in ordinary moments.`
          },
          {
            id: "haiku-koshien",
            title: "Haiku Koshien: The National High School Tournament",
            tag: "Intellectual Martial Arts",
            summary: "High school teams from across Japan gather in Matsuyama every summer to duel with self-composed haiku and rigorous public debate.",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
            fullText: `Inspired by the national high school baseball tournament, the 'Haiku Koshien' pits five-member student squads against one another on stage in Matsuyama.
Teams present their verses on assigned themes, followed by intense cross-examination scrutinizing each word's rhythm, nuance, and emotional resonance. Judged by leading contemporary poets, it has become a nationwide sensation celebrating the vitality of youth literature.`
          }
        ]
      },
      art: {
        title: "Where Ancient Bathing Meets Daring Avant-Garde Art",
        desc: "From Mika Ninagawa's kaleidoscopic floral takeovers to Tadao Ando's floating geometric concrete.",
        items: [
          {
            id: "ninagawa-dogo",
            title: "Mika Ninagawa × Dogo Onsen",
            tag: "Vibrant Contemporary Art",
            summary: "Internationally renowned photographer and film director Mika Ninagawa transformed the historic onsen town into a vivid universe of saturated petals and light.",
            image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
            fullText: `Since 2014, Dogo Onsen has boldly embraced modern art with recurrent 'Dogo Onsenart' projects.
The most breathtaking collaboration occurred with world-acclaimed photographer Mika Ninagawa.
During Dogo Onsen Honkan's extensive conservation works, Ninagawa wrapped the colossal exterior scaffold screens in a vivid collage of 230 brilliant blooming flowers.
Inside neighboring ryokan inns, she designed fully immersive artistic guest suites saturated with luminous photography, and covered the courtyard of Asuka-no-Yu with an open-air kaleidoscope of colors.`
          },
          {
            id: "dogo-onsenart",
            title: "Dogo Onsenart & Street-Walking Exhibitions",
            tag: "Pioneering Spa Biennial",
            summary: "Yayoi Kusama, Nobuyoshi Araki, Shinro Ohtake and others reimagined onsen culture into interactive open-air galleries.",
            image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
            fullText: `Dogo Onsenart proved to the world that an ancient onsen town could serve as a living canvas for daring contemporary art.
Visitors stroll dressed in traditional cotton yukata robes and wooden geta clogs, stumbling upon polka-dot hotel rooms by Yayoi Kusama, illuminated street lanterns by Nobuyoshi Araki, and striking public sculptures tucked into footbath pavilions.`
          },
          {
            id: "ando-architecture",
            title: "Tadao Ando's Architectural Masterpiece",
            tag: "Saka no Ue no Kumo Museum",
            summary: "A pure triangular glass pavilion featuring a column-free floating staircase ascending into lush castle woods.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            fullText: `Nestled into the verdant hillside beneath Matsuyama Castle, the Saka no Ue no Kumo Museum was designed by Pritzker Prize laureate Tadao Ando.
Constructed with two superimposed triangles, the interior features an unprecedented unsupported ramp that spirals upward without central pillars. The stark, velvety exposed concrete dialogues harmoniously with reflective glass panes mirroring the surrounding forest.`
          },
          {
            id: "botchan-theater",
            title: "Botchan Theater & Musical Culture",
            tag: "Regional Performing Arts",
            summary: "Japan's only dedicated regional musical theater producing year-round professional productions inspired by Shikoku's lore.",
            image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80",
            fullText: `Located in neighboring Toon City, the Botchan Theater is a rare cultural gem in Japan, mounting year-round professional Broadway-style musical productions based on historical figures, local folklore, and literary tales of Ehime and Shikoku. Matsuyama itself boasts a passionate musical community with symphony orchestras, choral festivals, and wind ensemble excellence.`
          }
        ]
      },
      citrus: {
        title: "Blessed by Three Suns: The Citrus Kingdom of Japan",
        desc: "Producing over 40 distinct citrus varieties nurtured by maritime breezes, mineral-rich terraced slopes, and endless sunshine.",
        items: [
          {
            id: "citrus-paradise",
            title: "Why Ehime is Japan's Undisputed Citrus Capital",
            tag: "The Miracle of 3 Suns",
            summary: "Direct sky sunlight, sea-reflection rays, and stone-wall thermal radiant heat join forces to craft luscious, concentrated sweetness.",
            image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
            fullText: `Ehime is renowned across Japan for harvesting more citrus varieties than any other prefecture.
The secret lies in its 'Three Suns':
1. Direct brilliant subtropical sunshine pouring from clear Pacific skies.
2. Sunlight reflecting off the shimmering waters of the Seto Inland Sea and Uwa Sea.
3. Thermal heat stored in the dry stone retaining walls of stepped hillside orchards.
Combined with well-drained steep terraced slopes and gentle sea breezes, every season yields a new, delectable specialty.`
          },
          {
            id: "premium-citrus",
            title: "The Holy Quartet of Luxury Citrus",
            tag: "Beni Madonna, Kanpei, Setoka & Iyokan",
            summary: "Forget ordinary oranges: taste the jelly-like texture and intoxicating fragrance of Ehime's proprietary cultivars.",
            image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
            fullText: `Beyond sweet winter satsuma mikan, Ehime is home to celebrated proprietary cultivars:
- [Beni Madonna]: Harvested only in December, its pulp has an astonishing, smooth jelly-like texture with virtually zero membrane resistance. Often eaten sliced like fine dessert gelatin.
- [Kanpei]: Crisp, bursting juice vesicles packed with astonishing sweetness behind a tissue-thin skin.
- [Setoka]: Crowned the 'toro of citrus' for its rich, overflowing ambrosial juice and melting flesh.
- [Iyokan]: Named after Ehime's ancient provincial name Iyo, celebrated for its refreshing perfume and robust flavor.`
          },
          {
            id: "juice-faucet",
            title: "The Urban Legend Brought to Life: Orange Juice on Tap!",
            tag: "Must-Try Experience",
            summary: "What started as an urban joke—'Ehime homes have a 3rd tap for mikan juice'—is now an iconic real-life attraction.",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80",
            fullText: `For decades, a humorous national legend claimed: 'In Ehime, kitchen sinks have three faucets: hot water, cold water, and 100% pure mikan juice.'
Matsuyama turned this delightful myth into reality!
At Matsuyama Airport, the Dogo Onsen Information Center, and specialized boutiques along the Matsuyama Castle Ropeway Street (like 10FACTORY), visitors can twist a shiny brass tap and watch rich, ice-cold pure citrus juice pour directly into their glass! Several shops offer tasting flights from different cultivars.`
          }
        ]
      },
      fishery: {
        title: "Bounties of the Inland Sea: Sea Bream & Coastal Soul Food",
        desc: "Swirling tides yield Japan's prized Madai (Red Sea Bream). Taste the legendary battle between two distinct styles of Taimeshi.",
        items: [
          {
            id: "taimeshi-battle",
            title: "The Epic Clash of Two 'Taimeshi' Styles",
            tag: "Ehime's Signature Dish",
            summary: "[Uwajima Style] Fresh raw sashimi bathed in raw egg & dashi sauce vs [Matsuyama Style] Whole sea bream steamed in dashi clay pots!",
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            fullText: `Ehime is Japan's undisputed #1 producer of premium Madai (Red Sea Bream). But how it is served depends on where you stand:
■ [Uwajima Style (South Ehime)]:
Invented by medieval naval warriors dining on rolling seas without cooking fires. Crisp slices of freshly caught raw sea bream sashimi are marinated in a bowl of dashi-soy broth beaten with a fresh raw egg yolk, sesame seeds, and nori seaweed, then generously poured over steaming hot white rice. Rich, savory, and unforgettable.
■ [Matsuyama Style (Central Ehime)]:
A whole, lightly grilled sea bream is placed into a clay pot with rice, kombu kelp broth, and soy sauce, then steamed to perfection. The fragrant fish flakes tenderly through the grains with savory crisped rice ('okoge') at the pot bottom.`
          },
          {
            id: "jakoten",
            title: "Jakoten: The Coastal Soul Food of Yawatahama",
            tag: "Crispy Mineral-Rich Fish Cake",
            summary: "Whole small coastal fish stone-ground with bones and skins intact, then flash-fried into a deeply savory, textured delicacy.",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
            fullText: `Jakoten is made using fresh Haranbo (glowbelly fish) caught in the pristine Uwa Sea. Leaving the delicate bones and skin intact, the meat is stone-ground into a fine paste, pressed into wooden molds, and fried in pure rapeseed oil.
The first bite yields a delightful crunch from tiny calcium-rich bones and a burst of deep umami. Locals love it lightly toasted over charcoal with grated ginger and a dash of local soy sauce alongside dry sake.`
          },
          {
            id: "uwakai-bounty",
            title: "Jewels of the Deep: Sma Tuna, Swordfish & Akoya Pearls",
            tag: "Treasures of Uwa Sea",
            summary: "The rare cultured 'Himetakami' fish praised as 'all-fat tuna', skewered ribbonfish, and world-class Uwajima pearls.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            fullText: `With dramatic ria coastlines and oxygen-rich currents, Ehime's seas produce extraordinary seafood.
The prize catch is 'Iyo no Himetakami'—farm-raised Sma mackerel-tuna celebrated for meat so decadent it is dubbed '100% otoro'.
Along the coast, silver ribbonfish (tachiuo) is wound around green bamboo and grilled over binchotan charcoal. Furthermore, Uwajima leads all of Japan in the cultivation of luminous Akoya cultured pearls.`
          }
        ]
      },
      trivia: {
        title: "Fascinating Secrets, Urban Myths & Literary Quirks",
        desc: "Unravel the unexpected connections that make Matsuyama and Ehime one of Japan's most intriguing regions.",
        items: [
          {
            id: "shiki-baseball",
            title: "Masaoka Shiki & Baseball: The Untold Love Affair",
            tag: "The Hall of Fame Poet",
            summary: "He adopted the pen-name 'No-Ball' (written 野・球), coined Japanese terms for 'Batter', 'Runner' and 'Fastball', and entered the Baseball Hall of Fame!",
            image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80",
            fullText: `[Pen Name 'No-Ball']
During his preparatory university days in Tokyo, Masaoka Shiki fell head over heels in love with the newly introduced American game of baseball, playing as catcher.
Playing on his childhood name 'Noboru', in 1890 he adopted the poetic pen name 'No-Ball' (written with the characters 野 'field' and 球 'ball')—years before the term 'Yakyu' was officially coined for the sport in Japan!

[Inventing Baseball Vocabulary]
Shiki passionately introduced baseball rules to Japanese readers through newspapers and essays. He translated foundational English terms into poetic Japanese:
'Batter' -> 打者 (Dasha)
'Runner' -> 走者 (Sosha)
'Fastball' -> 直球 (Chokkyu)
'Fly ball' -> 飛球 (Hikyu)
'Base on balls' -> 四球 (Shikyu)
He was also the very first person in world history to compose tanka and haiku celebrating baseball: 'Nine men gathering to strike a single ball and sprint—how wondrously delightful!'

[Induction into the Baseball Hall of Fame]
In 2002, Shiki was officially inducted into the Japanese Baseball Hall of Fame (Special Selection category) in honor of his immense contribution. Today, Matsuyama's premier stadium is proudly named 'Botchan Stadium', hosting professional Nippon Professional Baseball games.`
          },
          {
            id: "governor-kabuki",
            title: "Is Ehime's Governor Really a Kabuki Actor!? The Truth Revealed",
            tag: "Debunking the Famous Rumor",
            summary: "Why do people ask if Governor Tokihiro Nakamura is a Kabuki star? The uncanny name overlap with the legendary 'Nakamura Tokizo' line and the historic Uchiko-za theater.",
            image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
            fullText: `[The Rumor: Why do people think the Governor is in Kabuki?]
Travelers and news viewers frequently ask: 'Isn't the Governor of Ehime, Mr. Nakamura, a famous Kabuki actor?'
The factual answer: No, Governor Tokihiro Nakamura is NOT a Kabuki actor!
So where did this widespread impression come from? It stems from three fascinating coincidences:

1. Uncanny Resemblance to the Legendary 'Nakamura Tokizo' Lineage:
In traditional Kabuki, the Yorozuya guild is home to one of the most prestigious onnagata (female role) acting dynasties: 'Nakamura Tokizo' (中村時蔵). In 2024, the 6th Nakamura Tokizo held grand accession ceremonies across Japan. Because the Governor's name is 'Nakamura Tokihiro' (中村時広)—sharing the surname Nakamura and the character 'Toki' (時)—and given the Governor's polished public speaking and refined appearance, people across Japan frequently confuse the two names!

2. Ehime's Historic Uchiko-za Theater & Kabuki Heritage:
Ehime Prefecture is home to Uchiko-za (built in 1916), one of Japan's most famous surviving authentic wooden Kabuki playhouses, complete with revolving stages, trap doors, and hanamichi walkways. Major Shochiku Kabuki troupes regularly tour here. Ehime's strong cultural association with Kabuki often leads out-of-towners to assume their prominent leader with a Kabuki-sounding name is part of the tradition!

3. Who Governor Tokihiro Nakamura Really Is:
A graduate of Keio University Faculty of Law, he worked at the major trading conglomerate Mitsubishi Corporation before entering public service. He served in the Ehime Prefectural Assembly, the National Diet of Japan, and as Mayor of Matsuyama for 11 years before being elected Governor of Ehime in 2010 (now in his 4th term). He is famous for transforming Ehime into a global cycling paradise via the Shimanami Kaido!`
          },
          {
            id: "botchan-paradox",
            title: "Soseki Insulted Matsuyama in 'Botchan'—So Why Do Locals Love Him?",
            tag: "Warm Matsuyama Humor",
            summary: "He mocked the town as 'filthy' and the train as a 'toy matchbox'—yet Matsuyama named half the city after his book!",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
            fullText: `In 'Botchan', the hot-tempered Tokyo narrator mercilessly roasts Matsuyama's countryside habits, calling it a backwater full of scheming troublemakers.
Any other city might have banned the book in outrage.
Instead, the sunny, warm-hearted people of Matsuyama erupted with affection! They named their steam train 'Botchan Train', their sweets 'Botchan Dango', their baseball park 'Botchan Stadium', and erected statues of Soseki across the city.
This open-hearted humor and ability to laugh at oneself perfectly encapsulates the legendary 'Osettai' hospitality of Shikoku.`
          }
        ]
      }
    },
    interactive: {
      quizTitle: "Shiki Masaoka's Baseball Terminology Quiz",
      quizDesc: "Guess which modern baseball terms were coined and translated into Japanese by poet Shiki Masaoka!",
      haikuGenTitle: "Compose Your Matsuyama Haiku",
      haikuGenDesc: "Mix and match poetic motifs of Dogo Onsen, Mikan citrus, and the Castle to create an authentic verse.",
      taimeshiTitle: "Which Taimeshi Matches Your Soul?",
      taimeshiDesc: "Take the 10-second test to find your ultimate Sea Bream bowl style."
    },
    footer: {
      about: "MATSUYAMA & EHIME DISCOVERY PORTAL",
      desc: "An open global discovery project celebrating the 3,000-year history, avant-garde art, citrus richness, and surprising cultural heritage of Matsuyama & Ehime, Japan.",
      githubNote: "Ready for GitHub. Open for global contributions, translations, and cultural exchanges.",
      copyright: "© MATSUYAMA DISCOVERY PROJECT. Crafted with pride for Matsuyama & Ehime."
    }
  }
};

// Application State
let currentLang = 'ja';
let currentTab = 'history';

// Icon Map (Lucide SVGs)
const icons = {
  castle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20v-7.5a2 2 0 0 0-2-2h-3v-4a2 2 0 0 0-2-2h-2V2.5a.5.5 0 0 0-1 0V4.5H9a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/><path d="M18 10.5V8a1 1 0 0 0-1-1h-2"/><path d="M7 8a1 1 0 0 0-1 1v1.5"/><path d="M10 14h4v8h-4z"/></svg>`,
  feather: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  citrus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  fish: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 4 3.1 8.5 2.1 12 1 16c2.5-1 4.5-2.5 6-5.33Z"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
};

// Initialize Application
function initApp() {
  renderNavbar();
  renderHero();
  renderTabs();
  renderActiveSection();
  renderInteractiveSection();
  renderFooter();
  setupEventListeners();
}

// Render Navbar
function renderNavbar() {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer) return;

  const data = siteData[currentLang];
  navContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center space-x-3 cursor-pointer" onclick="switchTab('history')">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
          <span class="font-display font-bold text-xl">M</span>
        </div>
        <div>
          <span class="font-display font-bold tracking-wider text-xl text-white">MATSUYAMA</span>
          <span class="text-xs uppercase tracking-widest text-orange-400 block font-semibold">Discovery Portal</span>
        </div>
      </div>

      <!-- Language Selector & Quick Links -->
      <div class="flex items-center space-x-3">
        <div class="flex bg-slate-800/80 p-1 rounded-full border border-slate-700/60 shadow-inner">
          <button id="btn-lang-ja" onclick="setLanguage('ja')" class="px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${currentLang === 'ja' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'}">
            日本語
          </button>
          <button id="btn-lang-en" onclick="setLanguage('en')" class="px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${currentLang === 'en' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'}">
            English
          </button>
        </div>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center space-x-2 text-xs font-medium text-slate-300 hover:text-orange-400 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-orange-500/50 transition-colors">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>GitHub Ready</span>
        </a>
      </div>
    </div>
  `;
}

// Render Hero Section
function renderHero() {
  const heroContainer = document.getElementById('hero-container');
  if (!heroContainer) return;

  const data = siteData[currentLang];
  heroContainer.innerHTML = `
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center z-10">
      <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
        <span>🇯🇵 Matsuyama & Ehime, Japan</span>
        <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
        <span>${data.heroBadge}</span>
      </div>

      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
        <span class="block font-serif-jp text-slate-100">${currentLang === 'ja' ? '巡る、松山・愛媛の深層。' : 'Discover the Spirit of Matsuyama'}</span>
        <span class="block text-gradient-orange text-3xl sm:text-5xl lg:text-6xl mt-2 font-display">
          ${currentLang === 'ja' ? '3000年の古湯から、極彩色のアート・美味の海へ' : 'Where 3,000-Year Heritage Meets Vivid Art'}
        </span>
      </h1>

      <p class="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-12">
        ${data.heroDesc}
      </p>

      <!-- Quick Metrics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        ${data.quickStats.map(stat => `
          <div class="glass-card rounded-2xl p-4 text-center">
            <div class="text-2xl sm:text-3xl font-extrabold text-orange-400 font-display">
              ${stat.value}<span class="text-xs sm:text-sm font-normal text-slate-400 ml-1">${stat.unit}</span>
            </div>
            <div class="text-xs text-slate-300 mt-1 font-medium">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Tabs Navigation
function renderTabs() {
  const tabsContainer = document.getElementById('tabs-container');
  if (!tabsContainer) return;

  const data = siteData[currentLang];
  tabsContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex overflow-x-auto pb-4 gap-2 sm:gap-3 scrollbar-none justify-start md:justify-center">
        ${data.tabs.map(tab => {
          const isActive = tab.id === currentTab;
          return `
            <button onclick="switchTab('${tab.id}')" 
              class="flex-shrink-0 flex items-center space-x-2.5 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? 'active-tab' 
                  : 'bg-slate-800/60 text-slate-300 border-slate-700/80 hover:bg-slate-850 hover:border-slate-600'
              }">
              <span class="${isActive ? 'text-white' : 'text-orange-400'}">${icons[tab.icon] || ''}</span>
              <div class="text-left">
                <span class="block">${tab.label}</span>
                <span class="block text-[10px] opacity-75 font-normal truncate max-w-[120px] sm:max-w-[180px]">${tab.subtitle}</span>
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Render the Active Category Section
function renderActiveSection() {
  const sectionContainer = document.getElementById('active-section-container');
  if (!sectionContainer) return;

  const data = siteData[currentLang];
  const section = data.sections[currentTab];
  if (!section) return;

  sectionContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white font-serif-jp mb-4">
          ${section.title}
        </h2>
        <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
          ${section.desc}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        ${section.items.map(item => `
          <div class="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer" onclick="openModal('${item.id}')">
            <!-- Image with Overlay Tag -->
            <div class="relative h-52 sm:h-60 overflow-hidden">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <span class="absolute top-4 left-4 bg-orange-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                ${item.tag}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2 font-serif-jp">
                  ${item.title}
                </h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">
                  ${item.summary}
                </p>
              </div>

              <div class="pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-semibold text-orange-400">
                <span>${currentLang === 'ja' ? '詳しく読む・物語を開く' : 'Read Full Story'}</span>
                <span class="transform transition-transform group-hover:translate-x-1">${icons.arrowRight}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Specific Highlights based on Tab -->
      ${renderTabSpecialBanner(currentTab)}
    </div>
  `;
}

// Special Highlight Banners for Tab Context
function renderTabSpecialBanner(tabId) {
  const isJa = currentLang === 'ja';

  if (tabId === 'trivia') {
    return `
      <div class="mt-12 glass-panel rounded-3xl p-6 sm:p-10 border border-orange-500/30 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <span class="inline-block bg-rose-500/20 text-rose-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              ${isJa ? '検証コラム：噂の真相' : 'Fact-Check Feature'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-white font-serif-jp">
              ${isJa ? '「中村知事は歌舞伎役者？」噂の真相まとめ' : 'Governor Tokihiro Nakamura & Kabuki: The Verdict'}
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">
              ${isJa 
                ? '歌舞伎の名門「六代目 中村時蔵」氏との名前の酷似、大正時代から続く現役芝居小屋「内子座」の存在、そして知事の知的な存在感が合わさって生まれた愛媛の有名な勘違いネタ。実際は慶應大・三菱商事・松山市長を経て愛媛を導くリーダーです！'
                : 'A widespread mix-up created by his uncanny name resemblance to prominent Kabuki star Nakamura Tokizo and Ehime’s famous historic Uchiko-za theater. Governor Tokihiro Nakamura is actually a dedicated public leader driving cycling and international tourism!'}
            </p>
          </div>
          <div class="flex-shrink-0 bg-slate-800/80 p-5 rounded-2xl border border-slate-700 max-w-xs text-center">
            <div class="text-3xl mb-2">🎭 ⇄ 🏛️</div>
            <div class="text-xs text-slate-400 uppercase tracking-widest font-semibold">${isJa ? '名前の比較' : 'Name Comparison'}</div>
            <div class="text-sm font-bold text-white mt-1">六代目 中村時蔵 (Kabuki)</div>
            <div class="text-xs text-slate-400">vs</div>
            <div class="text-sm font-bold text-orange-400">中村時広 知事 (Governor)</div>
            <div class="text-[11px] text-emerald-400 mt-2 font-medium">${isJa ? '謎が解けてスッキリ！' : 'Mystery Solved!'}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (tabId === 'citrus') {
    return `
      <div class="mt-12 glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div class="text-3xl mb-2">🚰</div>
            <div class="font-bold text-white mb-1">${isJa ? '蛇口スポット 1' : 'Tap Spot 1'}</div>
            <div class="text-xs text-slate-300">${isJa ? '松山空港 1F到着ロビー / 2F出発ロビー' : 'Matsuyama Airport (1F & 2F)'}</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div class="text-3xl mb-2">🍊</div>
            <div class="font-bold text-white mb-1">${isJa ? '蛇口スポット 2' : 'Tap Spot 2'}</div>
            <div class="text-xs text-slate-300">${isJa ? '松山城ロープウェイ街「10 FACTORY」' : '10 FACTORY (Castle Ropeway Street)'}</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div class="text-3xl mb-2">♨️</div>
            <div class="font-bold text-white mb-1">${isJa ? '蛇口スポット 3' : 'Tap Spot 3'}</div>
            <div class="text-xs text-slate-300">${isJa ? '道後温泉観光案内所・えひめ愛顔の観光物産館' : 'Dogo Onsen Info Center'}</div>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

// Render Interactive Features Section
function renderInteractiveSection() {
  const container = document.getElementById('interactive-container');
  if (!container) return;

  const data = siteData[currentLang];
  const isJa = currentLang === 'ja';

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-2">
          ${isJa ? '体験型ディスカバリー' : 'Interactive Discovery'}
        </span>
        <h2 class="text-3xl font-extrabold text-white font-serif-jp">
          ${isJa ? '松山・愛媛をもっと楽しむインタラクティブ体験' : 'Engage with Matsuyama Culture'}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Baseball Terms Quiz -->
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold mb-4">
              ⚾
            </div>
            <h3 class="text-lg font-bold text-white mb-2 font-serif-jp">${data.interactive.quizTitle}</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">${data.interactive.quizDesc}</p>
            <div id="quiz-question-box" class="space-y-2">
              <p class="text-xs text-orange-300 font-semibold mb-2">Q: ${isJa ? '子規が名付け親となった次の言葉のうち、正しいのは？' : 'Which baseball term was translated into Japanese by Shiki?'}</p>
              <button onclick="handleQuizAnswer(true)" class="w-full text-left text-xs bg-slate-800 hover:bg-orange-500/20 p-2.5 rounded-lg border border-slate-700 transition">
                A. ${isJa ? '打者 (Batter)・走者 (Runner)・直球 (Fastball)' : 'Batter, Runner & Fastball'}
              </button>
              <button onclick="handleQuizAnswer(false)" class="w-full text-left text-xs bg-slate-800 hover:bg-orange-500/20 p-2.5 rounded-lg border border-slate-700 transition">
                B. ${isJa ? '審判 (Umpire)・捕手 (Catcher)' : 'Umpire & Pitcher'}
              </button>
              <div id="quiz-result" class="text-xs mt-3 hidden"></div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Taimeshi Matchmaker -->
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold mb-4">
              🐟
            </div>
            <h3 class="text-lg font-bold text-white mb-2 font-serif-jp">${data.interactive.taimeshiTitle}</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">${data.interactive.taimeshiDesc}</p>
            <div class="space-y-3">
              <label class="text-xs text-slate-300 block">${isJa ? 'いまの気分は？' : 'What is your current craving?'}</label>
              <select id="taimeshi-select" onchange="recommendTaimeshi()" class="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-xs text-white">
                <option value="raw">${isJa ? '新鮮な生魚と卵かけご飯を豪快にかき込みたい！' : 'Fresh raw sashimi bowl with rich egg yolk!'}</option>
                <option value="steamed">${isJa ? '出汁が香るふっくら炊き込みご飯とおこげを味わいたい！' : 'Fragrant warm steamed rice with savory dashi & crust!'}</option>
              </select>
              <div id="taimeshi-result" class="p-3 bg-sky-950/40 border border-sky-800/40 rounded-xl text-xs text-sky-200 mt-3">
                ${isJa ? '👉 おすすめ：【宇和島鯛めし】新鮮な鯛刺身を特製タレと生卵で豪快に！' : '👉 Recommendation: [Uwajima Taimeshi] Sashimi in egg-dashi sauce!'}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Haiku Generator -->
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
              ✍️
            </div>
            <h3 class="text-lg font-bold text-white mb-2 font-serif-jp">${data.interactive.haikuGenTitle}</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">${data.interactive.haikuGenDesc}</p>
            <div class="space-y-3">
              <div id="generated-haiku-box" class="p-4 bg-slate-850 border border-slate-700/80 rounded-xl text-center font-serif-jp text-sm text-amber-300">
                ${isJa ? '湯の街に / みかん薫るや / 城の月' : 'Ancient steam ascends / Scent of sweet citrus floats high / Moon above castle'}
              </div>
              <button onclick="generateRandomHaiku()" class="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg text-xs shadow-md transition">
                ${isJa ? '🎲 別の句を詠む' : '🎲 Generate Another Verse'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Footer
function renderFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const data = siteData[currentLang];
  footerContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span class="font-display font-bold text-white tracking-wider text-lg">${data.footer.about}</span>
          <p class="text-xs text-slate-400 mt-1 max-w-lg leading-relaxed">${data.footer.desc}</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="text-xs text-orange-400/90 font-medium">${data.footer.githubNote}</div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-slate-850 text-center text-[11px] text-slate-500">
        ${data.footer.copyright}
      </div>
    </div>
  `;
}

// Switch Active Tab
function switchTab(tabId) {
  currentTab = tabId;
  renderTabs();
  renderActiveSection();
}

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  renderNavbar();
  renderHero();
  renderTabs();
  renderActiveSection();
  renderInteractiveSection();
  renderFooter();
}

// Detail Modal Logic
function openModal(itemId) {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-body');
  if (!modalBackdrop || !modalBody) return;

  const data = siteData[currentLang];
  let foundItem = null;

  for (const key in data.sections) {
    const item = data.sections[key].items.find(i => i.id === itemId);
    if (item) {
      foundItem = item;
      break;
    }
  }

  if (!foundItem) return;

  modalBody.innerHTML = `
    <div class="relative">
      <button onclick="closeModal()" class="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 text-slate-300 hover:text-white rounded-full border border-slate-700/60 transition">
        ${icons.close}
      </button>

      <div class="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
        <img src="${foundItem.image}" alt="${foundItem.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <span class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow">
            ${foundItem.tag}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white font-serif-jp">${foundItem.title}</h2>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
        <p class="text-orange-300 font-medium text-sm leading-relaxed">${foundItem.summary}</p>
        <div class="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 font-light">
          ${foundItem.fullText}
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
  }
  document.body.style.overflow = '';
}

// Interactive Quiz Handler
function handleQuizAnswer(isCorrect) {
  const res = document.getElementById('quiz-result');
  if (!res) return;
  res.classList.remove('hidden');
  if (isCorrect) {
    res.innerHTML = `<span class="text-emerald-400 font-bold">🎉 正解！ Correct!</span><br><span class="text-slate-300">子規は「打者」「走者」「直球」「四球」「飛球」などを考案し、野球普及に尽力しました。</span>`;
  } else {
    res.innerHTML = `<span class="text-rose-400 font-bold">惜しい！ Try Again!</span><br><span class="text-slate-300">正解はAです。「打者」「走者」「直球」は子規が翻訳・考案した用語です。</span>`;
  }
}

// Taimeshi Recommendation Handler
function recommendTaimeshi() {
  const select = document.getElementById('taimeshi-select');
  const res = document.getElementById('taimeshi-result');
  if (!select || !res) return;

  const isJa = currentLang === 'ja';
  if (select.value === 'raw') {
    res.innerHTML = isJa 
      ? '👉 おすすめ：【宇和島鯛めし】新鮮な鯛刺身を特製タレと生卵で豪快に白米にかき込む絶品！'
      : '👉 Recommendation: [Uwajima Taimeshi] Raw sashimi in egg yolk dashi poured over hot rice!';
  } else {
    res.innerHTML = isJa
      ? '👉 おすすめ：【松山鯛めし】素焼きの真鯛を一尾丸ごと昆布出汁で炊き上げるふっくら伝統の味！'
      : '👉 Recommendation: [Matsuyama Taimeshi] Whole sea bream steamed in fragrant dashi clay pot!';
  }
}

// Haiku Random Generator
const haikus = {
  ja: [
    "湯の街に / みかん薫るや / 城の月",
    "柿くへば / 鐘が鳴るなり / 法隆寺 (正岡子規)",
    "春や昔 / 十五万石の / 城下哉 (正岡子規)",
    "松山や / 秋の潮風 / 鯛の味",
    "彩る花 / 道後を照らす / 宵の湯気",
    "球音の / 響く伊予路の / 秋高し"
  ],
  en: [
    "Ancient steam ascends / Scent of sweet citrus floats high / Moon above castle",
    "Eating a persimmon / The bell chimes far and wide / Horyuji Temple (Shiki)",
    "Spring of long ago / Castle town of samurai / Proud fifteen myriad stones (Shiki)",
    "Breeze from Seto Sea / Fresh sea bream on warm white rice / Sweet autumn evening",
    "Vivid flowers bloom / Lanterns light the ancient bath / Night of healing warmth"
  ]
};

function generateRandomHaiku() {
  const box = document.getElementById('generated-haiku-box');
  if (!box) return;
  const list = haikus[currentLang];
  const randomHaiku = list[Math.floor(Math.random() * list.length)];
  box.textContent = randomHaiku;
}

// Setup Event Listeners
function setupEventListeners() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Run on Load
document.addEventListener('DOMContentLoaded', initApp);
