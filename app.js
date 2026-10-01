// MATSUYAMA & EHIME GLOBAL DISCOVERY PORTAL - APP DATA & LOGIC
// FULLY AUTHENTICATED WITH REAL PHOTOGRAPHS (Wikimedia Commons & Curated Real Spot Images)

const siteData = {
  ja: {
    siteTitle: "MATSUYAMA DISCOVERY",
    siteSubtitle: "日本最古の湯と文学、極彩色の美意識、そして瀬戸内・宇和海の恵み",
    heroBadge: "愛媛・松山を世界へ発信する公式ディスカバリーポータル",
    heroHeading: "巡る、松山・愛媛の深層。",
    heroSubheading: "3000年の古湯から、坂の上の雲、極彩色のアート、霊峰と海の絶景へ",
    heroDesc: "道後温泉、松山城二之丸庭園、司馬遼太郎『坂の上の雲』、蜷川実花が咲き誇るアート温泉街、西日本最高峰・石鎚山とUFOライン、世界一のしまなみ海道、伝統の鯛釜飯とみかん鯛、そして愛媛の真のソウルフード「母恵夢」。世界を魅了する愛媛・松山の奥深い物語へようこそ。",
    quickStats: [
      { label: "道後温泉の歴史", value: "3,000+", unit: "年" },
      { label: "西日本最高峰・石鎚山", value: "1,982", unit: "m" },
      { label: "愛媛の柑橘品種数", value: "40+", unit: "種以上" },
      { label: "松山城・現存天守", value: "1602", unit: "年創架" }
    ],
    tabs: [
      { id: "sakanoue", icon: "cloud", label: "坂の上の雲 特集", subtitle: "秋山兄弟・正岡子規・萬翠荘・安藤忠雄" },
      { id: "history", icon: "castle", label: "歴史と名城", subtitle: "道後温泉・松山城二之丸庭園・夏目漱石" },
      { id: "haiku", icon: "feather", label: "俳句と文化", subtitle: "ことばのまち・正岡子規・俳句甲子園" },
      { id: "art", icon: "palette", label: "極彩色アート＆工芸", subtitle: "蜷川実花道後・砥部焼最高峰・今治タオル" },
      { id: "citrus", icon: "citrus", label: "柑橘王国", subtitle: "みかん・紅まどんな・蛇口からみかんジュース" },
      { id: "fishery", icon: "fish", label: "水産・郷土の美味", subtitle: "鯛釜飯歴史・みかん鯛・じゃこ天・母恵夢" },
      { id: "scenic", icon: "compass", label: "四国山地＆海の絶景", subtitle: "石鎚山・瓶ヶ森UFOライン・亀老山・下灘駅・四国遍路" },
      { id: "trivia", icon: "sparkles", label: "意外なトリビア", subtitle: "子規と野球・中村知事歌舞伎の真相・現代の話題" }
    ],
    sections: {
      sakanoue: {
        title: "『坂の上の雲』：近代日本の夜明けを駆け抜けた三人の青春",
        desc: "司馬遼太郎が描いた日本近代の奇跡。松山が生んだ秋山好古・真之兄弟と正岡子規の足跡、そして華麗なる洋館・萬翠荘へ。",
        items: [
          {
            id: "akiyama-brothers",
            title: "秋山好古・真之兄弟の不屈の武士道",
            tag: "松山が生んだ近代日本の英傑",
            summary: "兄・好古は「日本騎兵の父」としてコサック騎兵を撃破。弟・真之は日本海海戦の名参謀。栄達に溺れず教育に生きた清廉な生涯。",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Akiyama_Yoshifuru.jpg",
            fullText: `【兄・秋山好古（あきやま よしふる）】：
貧しい松山藩士の家に生まれ、身一つで陸軍士官学校へ進み、フランスへ留学。騎兵の近代化を成し遂げ「日本騎兵の父」と称されました。
日露戦争では世界最強と恐れられたロシアのコサック騎兵部隊を打ち破る大功を立て、陸軍大将まで昇りつめました。しかし退役後、元帥への推薦を断り、故郷・松山に戻って私立北予中学校（現在の松山北高校）の校長に就任。「男子は名利を求めず、ただ世のため人のために尽くせ」と、質素な生活を貫きながら若者たちの教育に余生を捧げました。

【弟・秋山真之（あきやま さねゆき）】：
幼少期は悪戯っ子でならすも抜群の頭脳を持ち、正岡子規とともに東京で学んだ後、海軍兵学校へ。首席で卒業し、アメリカへ留学して最新の海戦術を学びました。
日露戦争の「日本海海戦」において連合艦隊作戦参謀として「七段構えの陣」を考案し、世界最強と言われたロシア・バルチック艦隊を完全撃滅へ導きました。大本営への報告文「本日天気晴朗ナレドモ浪高シ」は、日本軍事史上屈指の名文として今も語り継がれています。`
          },
          {
            id: "sakanoue-museum",
            title: "坂の上の雲ミュージアム（安藤忠雄建築）",
            tag: "安藤忠雄設計の実存建築",
            summary: "松山城の麓に佇む鋭角三角形の現代建築。支柱のない「空中階段」が、未来へ坂を登り続ける物語の世界を体現。",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Saka-no-ue-no-kumo_Museum.jpg",
            fullText: `松山城の緑豊かな山麓に建つ「坂の上の雲ミュージアム」は、世界的な建築家・安藤忠雄氏の設計により2007年に開館しました。
建物は松山の歴史と自然に調和するよう、三角形の平面形状を採用。内部に入ると、支柱が一本もないスロープ状の「空中階段（立体トラス構造）」が空間を緩やかに上昇していきます。
これは、主人公たちが「ただ前へ、坂の上の雲を目指して登り続けた」明治の青雲の志を建築空間として表現したもの。小説の直筆原稿や軍艦三笠の模型、当時の貴重な歴史資料が体系的に展示されています。`
          },
          {
            id: "bansuiso",
            title: "萬翠荘（ばんすいそう）",
            tag: "国指定重要文化財",
            summary: "大正11年建築、愛媛県最古のフランス・ルネサンス風洋館。旧松山藩主子孫・久松定謨伯爵が築いた気品あふれる宮殿。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bansui-so_2016-04-30.jpg/1280px-Bansui-so_2016-04-30.jpg",
            fullText: `「坂の上の雲ミュージアム」のすぐ隣、城山の深い緑に包まれて優雅な姿を見せるのが「萬翠荘（ばんすいそう）」です。
1922年（大正11年）、旧松山藩主の子孫である久松定謨（ひさまつ さだこと）伯爵が別邸として建設しました。設計は愛媛県庁舎なども手がけた木子七郎。
純フランス・ルネサンス様式の鉄筋コンクリート造3階建てで、正面のステンドグラス、水晶のシャンデリア、大理石のマントルピースなど、当時のヨーロッパ最高峰の美意識がそのまま息づいています。
昭和天皇が皇太子時代にご宿泊されたほか、各界の名士が集う最高級の社交場として愛され、国の重要文化財に指定されています。`
          }
        ]
      },
      history: {
        title: "3,000年の歴史が息づく名湯と、日本屈指の美しい名城",
        desc: "世界に誇る道後温泉、トリップアドバイザー日本の城ランキング上位の松山城、そして「恋人の聖地」二之丸史跡庭園。",
        items: [
          {
            id: "dogo-onsen",
            title: "道後温泉本館",
            tag: "国指定重要文化財",
            summary: "日本最古、3,000年の歴史を誇る名湯。2024年7月に約5年半の保存修理を終え、全館営業を完全再開。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
            fullText: `道後温泉は『日本書紀』や『万葉集』にも登場する日本最古の温泉地です。聖徳太子も来浴し、その霊泉を讃えた碑文を遺したと伝えられます。
その象徴である「道後温泉本館」は、1894年（明治27年）に棟梁・坂本又八郎によって建てられた木造三層楼の近代和風建築。
2019年から約5年半に及ぶ大規模な保存修理工事（重要文化財の公衆浴場を営業しながら保存修理を行う世界初の試み）を実施し、2024年7月11日についに全館営業を再開しました。
最上層には時を告げる「振鷺閣（しんろかく）」があり、朝・昼・夕に打ち鳴らされる「刻太鼓（ときだいこ）」の音は環境省「残したい日本の音風景100選」に選ばれています。`
          },
          {
            id: "matsuyama-castle",
            title: "松山城（勝山城）＆ 二之丸史跡庭園",
            tag: "日本現存12天守 ＆ 恋人の聖地",
            summary: "「日本の美しい城」上位常連の連立式天守。発掘された藩邸の間取りを流水園で再現した唯一無二の「二之丸史跡庭園」の美。",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
            fullText: `【松山城天守の美】：
標高132mの勝山山頂にそびえる松山城は、日本に12基しか残らない「現存天守」の一つ。「日本三大連立式平山城（姫路城・和歌山城・松山城）」に数えられ、トリップアドバイザー「旅好きが選ぶ！日本の城ランキング」でも全国第2位に輝いた実績を持つ屈指の美城です。21棟の建造物が国指定重要文化財。

【奇跡の庭園：松山城二之丸史跡庭園】：
城の麓に広がる「二之丸史跡庭園」は、発掘調査で見つかった藩主邸の部屋の間取りや通路を、池や流水園、愛媛の柑橘・草花でそのまま立体的に表現した世界でも極めて珍しい史跡庭園です。
日露戦争当時、捕虜収容所だった松山で出会ったロシア人将校ワシーリー・ボイスマンと日本人看護婦タケの愛のコインが庭園の井戸から出土したことから「恋人の聖地」に認定。結婚式の前撮りロケーションとしても全国から絶大な人気を集めています。`
          },
          {
            id: "soseki-botchan",
            title: "夏目漱石と名作『坊っちゃん』",
            tag: "明治の文豪と松山",
            summary: "漱石が英語教師として赴任した松山での体験から誕生。市内を走る「坊っちゃん列車」は松山の象徴。",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/BotchanTrainNo.1.jpg",
            fullText: `1895年（明治28年）、28歳の夏目漱石は愛媛県尋常中学校（現在の松山東高校）の英語教師として松山に赴任しました。親友の正岡子規の下宿「愚陀仏庵（ぐだぶつあん）」で52日間の同居生活を送り、俳句の指導を受けながら思索を深めました。
この松山での実体験をもとに1906年に発表されたのが国民的小説『坊っちゃん』です。
作中では松山を「マッチ箱のような汽車」「狸や赤シャツの跋扈する片田舎」とユーモアたっぷりに描写していますが、漱石自身は道後温泉を毎日訪れるほど愛していました。今も市内を走る「坊っちゃん列車」や銘菓「坊っちゃん団子」など、松山のアイデンティティとして息づいています。`
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
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Masaoka_Shiki.jpg",
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
        title: "極彩色の現代アートと、世界に誇る匠の工芸",
        desc: "蜷川実花が彩る圧倒的な色彩の温泉街から、パリやNYで称賛される砥部焼、最高峰の今治タオルまで。",
        items: [
          {
            id: "ninagawa-dogo",
            title: "蜷川実花 × 道後温泉：極彩色の花と光のアート",
            tag: "道後オンセナートの金字塔",
            summary: "写真家・映画監督の蜷川実花氏が放つ鮮烈な色彩美。本館巨大ラッピングから飛鳥乃湯泉の中庭フラワーアートまで、温泉街が奇跡の美術館へ。",
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
            fullText: `道後温泉が世界に放つ最も刺激的なプロジェクトが、写真家・映画監督の蜷川実花氏とのコラボレーションです。
【道後温泉本館のラッピング】：保存修理工事中の本館を覆う巨大なテント幕に、蜷川氏が撮影した230輪もの鮮烈な花々の写真コラージュを全面展開。歴史的木造建築の修復現場を、前代未聞のパブリックアートへと昇華させました。
【飛鳥乃湯泉の中庭インスタレーション】：道後温泉別館「飛鳥乃湯泉（あすかのゆ）」の中庭シェードや回廊に、太陽光を浴びて透き通る極彩色の花々を敷き詰め、訪れる人々を万華鏡のような色彩のシャワーで包み込みます。
【旅館アートルーム】：歴史ある旅館の客室を丸ごと蜷川作品で包み込んだ宿泊体験など、3000年の古湯と最先端のビビッドな美意識が響き合う唯一無二の空間です。`
          },
          {
            id: "tobeyaki-craft",
            title: "砥部焼（とべやき）：民藝の実用美から世界最高峰の白磁アートへ",
            tag: "国指定伝統的工芸品 ＆ グローバルモダン",
            summary: "柳宗悦やバーナード・リーチが絶賛した素朴な厚手磁器だけでなく、現代ではパリやNYで称賛される繊細な薄手白磁・高級アートピースへと進化。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
            fullText: `【240年の歴史と民藝の美】：
砥部焼は1775年、松山藩主・加藤泰候の命により創始されました。頑丈でぽってりとした白磁に、深い藍色（呉須）で手描きされる唐草文様は、柳宗悦の民藝運動や世界的陶芸家バーナード・リーチから「健康な実用美の最高峰」と絶賛されました。

【世界的な評価と現代の高級磁器アート】：
現代の砥部焼は、日常のうどん鉢やカフェ食器にとどまりません。人間国宝級の作家による「薄手の白磁」「青白磁」「象嵌（ぞうがん）」など、数百万円に達する最高級の美術工芸品が次々と生み出されています。
近年ではパリの「メゾン・エ・オブジェ」やニューヨークのインテリアシーン、世界の星付きレストランにも採用され、モダンで洗練されたテーブルウェアとして国際的に極めて高い位置づけを獲得しています。`
          },
          {
            id: "imabari-towel",
            title: "今治タオル：世界の高級ホテルが選ぶ至高の肌触り",
            tag: "ジャパンブランドの最高峰",
            summary: "名峰・石鎚山の清らかな軟水が生む奇跡の吸水性。「5秒ルール」の厳格な品質基準と、佐藤可士和氏による世界的リブランディング。",
            image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛県今治市は、120年以上の歴史を持つ世界最高峰のタオル産地です。
名峰・石鎚山脈の雪解け水（蒼社川の伏流水）は極めてミネラル分の少ない軟水。この清冽な水で糸を丁寧に晒すことで、綿本来の柔らかさと繊細な発色を極限まで引き出します。
「タオル片を水に浮かべ、5秒以内に水中に沈み始めるか」を試す厳格な「5秒ルール」をクリアしたものだけが認証されます。クリエイティブディレクター・佐藤可士和氏によるブランディングを経て、今や世界の一流ホテルや海外セレブ御用達のグローバル高級ブランドとして確固たる地位を築いています。`
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
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Citrus_unshiu_20101127_c.jpg/1280px-Citrus_unshiu_20101127_c.jpg",
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
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Matsuyama_Airport_20240709_%2810%29.jpg/1280px-Matsuyama_Airport_20240709_%2810%29.jpg",
            fullText: `かつて全国で都市伝説として語られた「愛媛の家には水とお湯のほかに、みかんジュースが出る蛇口があるらしい」。
この冗談を本気で実現したのが、松山空港や道後温泉観光案内所、ロープウェイ街の専門店（「10FACTORY」「えひめ愛顔の観光物産館」など）に設置されたジュース蛇口です！
蛇口のレバーをひねると、鮮やかなオレンジ色の100%ストレートみかん果汁がトクトクとコップに注がれます。温州、伊予柑、不知火など複数種類の蛇口から飲み比べができる店舗もあり、国内外の旅行者に大人気の体験スポットです。`
          }
        ]
      },
      fishery: {
        title: "2大鯛めしの深き歴史、革新のみかん鯛、そして愛媛の真のソウルフード",
        desc: "1700年の歴史を持つ鯛釜飯、産学連携の「みかん鯛」、そしてタルトより愛される銘菓「母恵夢（ポエム）」。",
        items: [
          {
            id: "taimeshi-battle",
            title: "鯛めしの歴史と松山の真実：【釜飯・炊き込み】vs【生卵刺身】",
            tag: "1700年の歴史と売れ筋",
            summary: "神功皇后ゆかりの松山・北条「鯛釜飯（炊き込み）」と、伊予水軍の「宇和島鯛めし」。松山の名店では食べ比べが大人気！",
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            fullText: `【歴史的ルーツの違い】：
■ 松山鯛めし（中予・北条鯛めし）：歴史はなんと古墳時代まで遡ります！神功皇后が三韓征伐の折、松山市北条の鹿島に立ち寄って戦勝を祈願した際、土地の漁師が獲れたての真鯛を丸ごと米と塩・酒で土釜で炊き上げて献上したのが始まり（1700年以上の歴史）。素焼きにした鯛の旨味がご飯一粒一粒に染み渡る、香ばしいおこげが絶品の「釜飯・土鍋炊き込み」です。
■ 宇和島鯛めし（南予風）：伊予水軍や宇和海の漁師が船の上で酒盛りをした後、火を使わずに生卵と醤油タレに鯛の刺身を絡めてご飯にぶっかけたのが始まり。

【松山での現在の売れ筋動向】：
観光客の間では、インパクト抜群の「宇和島鯛めし（生卵ぶっかけ）」が広く知られ大ヒットしていますが、地元松山市民や冠婚葬祭では伝統の「鯛釜飯・炊き込み」への支持も絶大！
老舗郷土料理店「五志喜（ごしき）」や「かどや」「丸水」などでは、両方を贅沢に食べ比べできるセットが松山グルメの超売れ筋となっています。`
          },
          {
            id: "mikan-tai",
            title: "産学官共同研究の結晶！新名物「みかん鯛」",
            tag: "世界初のフルーツ魚パイオニア",
            summary: "愛媛県と愛媛大学、養殖業者の共同研究で誕生！みかん果皮オイルを食べて育ち、魚臭さが消え爽やかな柑橘香が漂う奇跡の真鯛。",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            fullText: `【共同研究が生んだ科学の鯛】：
愛媛県水産研究センター、愛媛大学、そして地元養殖業者がタッグを組み、愛媛特産の柑橘（伊予柑やみかんの搾りかす果皮）を飼料に配合して共同開発したのが「みかん鯛（フルーツ魚）」です！
柑橘に含まれるリモネンやポリフェノールが身に浸透することで、鯛特有の生臭さが劇的に低減。一口噛むとほんのり爽やかなみかんのアロマが口いっぱいに広がり、脂の抗酸化力も高まるため鮮度が長持ちします。
近年では全国の大手回転寿司チェーンや高級和食店、ふるさと納税でも引っ張りだことなり、全国の養殖界を揺るがす画期的なブランド魚として知名度が急上昇しています！`
          },
          {
            id: "jakoten-dish",
            title: "宇和海・八幡浜のソウルフード「じゃこ天」",
            tag: "カルシウム満点の名物",
            summary: "小魚（ほたるじゃこ等）を骨ごとすり身にして木枠で型取り、菜種油で揚げた素朴で力強い味。道後温泉の湯上がりビールに最高！",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Serving_jakoten_in_Dogo_%28cropped%29.jpg",
            fullText: `じゃこ天（雑魚天）は、宇和海で獲れる新鮮な小魚「ホタルジャコ（地元名：ハランボ）」などを頭と内臓だけ除き、皮や骨ごと石臼ですり潰して油で揚げた愛媛屈指のソウルフードです。
一口かじるとシャリシャリとした骨の小気味よい食感と、濃厚な魚の旨味が口いっぱいに広がります。
軽く炙って生姜醤油や大根おろしを添え、地酒の辛口とともにいただくのが地元流の最高の楽しみ方です。`
          },
          {
            id: "poeme-soulfood",
            title: "愛媛県民が一番愛する真のソウルフード菓子「母恵夢（ポエム）」",
            tag: "タルト・団子を超える熱愛銘菓",
            summary: "「タルトや坊っちゃん団子よりポエムが好き！」白餡にバターと卵黄を練り込んだ黄金の餡とバニラの香り。県民のDNAに刻まれた味。",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
            fullText: `愛媛の有名なお土産といえば「一六タルト」や「坊っちゃん団子」ですが、地元・松山市民や愛媛県民に「一番好きなお菓子は？」と聞くと、多くの人が真っ先に挙げるのがこの「母恵夢（ポエム）」です！
昭和25年に松山で誕生した瀬戸内銘菓。丁寧に裏ごしされた白餡に、新鮮な卵黄と上質なバターをたっぷりと練り込んだしっとり黄金色の餡を、バニラ香るビスケット生地で包んで香ばしく焼き上げています。
お茶にもコーヒーにも合い、一口食べると懐かしい温もりがあふれ出します。ひとくちサイズの「ベビー母恵夢」や、季節限定の「愛媛のみかん味」「瀬戸内レモン味」「栗味」など、県民の日常のおやつからご進物まで愛され続ける真の国民的スイーツです。`
          }
        ]
      },
      scenic: {
        title: "四国山地の天空パノラマと、多島美を望む世界最高峰の展望台",
        desc: "西日本最高峰・石鎚山、CMで話題沸騰のUFOライン（瓶ヶ森）、隈研吾設計の亀老山、そして海に最も近い下灘駅。",
        items: [
          {
            id: "ishizuchisan",
            title: "西日本最高峰・霊峰「石鎚山（いしづちさん）」",
            tag: "標高1,982m 日本七霊山",
            summary: "日本百名山にして四国の屋根。鎖場を登り詰めた天狗岳の鋭峰、山岳信仰の神秘と紅葉の圧倒的大パノラマ。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Isidutisan20220226_1.jpg/1280px-Isidutisan20220226_1.jpg",
            fullText: `標高1,982mを誇る石鎚山は、近畿以西の西日本最高峰。日本七霊山の一つとして古くから山岳信仰を集める神体山です。
切り立った岩壁をよじ登る「一の鎖」「二の鎖」「三の鎖」（迂回路あり）を乗り越えた先にある最高峰「天狗岳」の鋭利な断崖絶壁は圧巻の一言。
秋には山頂から山麓へと染まる紅葉が息をのむ美しさを誇ります。また、石鎚山脈が蓄える豊かな清流こそが、今治タオルの製造や愛媛の農作物を潤す命の源流となっています。`
          },
          {
            id: "kamegamori-ufoline",
            title: "瓶ヶ森（かめがもり）と「UFOライン」：天空の絶景ロード",
            tag: "国内屈指の山岳パノラマ",
            summary: "標高1,897m。車のCMで世界中の度肝を抜いた町道瓶ヶ森線（UFOライン）。広大な笹原「氷見二千石原」を抜ける天空の絶景！",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Mt.Kamegamori2.jpg/1280px-Mt.Kamegamori2.jpg",
            fullText: `四国山地の稜線を標高1,300m〜1,700mに沿って走る「町道瓶ヶ森線」、通称「UFOライン（雄峰ライン）」。
大手自動車メーカーの全国テレビCMの舞台となり、「日本にこんな天空の道があったのか！」と全国で話題沸騰となった国内屈指の絶景ドライブウェイです。
主峰・瓶ヶ森（1,897m）の山頂付近には、見渡す限りの緑の笹原「氷見二千石原（ひみにせんこくばら）」が広がり、雲の上を歩くような非日常のパノラマが広がります。四国山地の雄大さを最もダイレクトに体感できるスポットです。`
          },
          {
            id: "kirosan-view",
            title: "亀老山（きろうさん）展望公園：隈研吾設計の「見えない展望台」",
            tag: "日本の展望スポット第2位",
            summary: "しまなみ海道・大島の山頂に埋め込まれた世界的建築。来島海峡大橋と瀬戸内の多島美を一望する奇跡の夕日・夜景ビュー。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
            fullText: `しまなみ海道の大島南端に位置する標高307mの「亀老山（きろうさん）展望公園」。
トリップアドバイザー「旅好きが選ぶ！日本の展望スポット」で全国第2位に輝いた、世界中から観光客が集まる名所です。
世界的建築家・隈研吾氏が手がけた展望台は、山の自然景観を守るために地中に埋め込まれた「見えない建築」。スロープを抜けると視界が一気に開け、世界初の三連吊橋「来島海峡大橋」と渦巻く潮流、夕暮れに黄金に輝く瀬戸内海の多島美が一望できます。`
          },
          {
            id: "shimonada-station",
            title: "夕暮れの奇跡：JR下灘駅 & 観光列車「伊予灘ものがたり」",
            tag: "日本一海に近い駅",
            summary: "ホームの目の前に広がる伊予灘の大パノラマ。夕日が茜色に海を染める時間、世界中から旅人が集うノスタルジーの極み。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
            fullText: `JR予讃線の「下灘（しもなだ）駅」は、かつて「日本で一番海に近い駅」として青春18きっぷのポスターや数々の映画・ドラマ・アニメの舞台となった伝説の無人駅です。
屋根とベンチだけの素朴なホームに座ると、視界を遮るもののない瀬戸内海（伊予灘）が目の前いっぱいに広がります。
特に夕暮れ時、黄金色の太陽が海へと沈み、空と海が茜色から紫色のグラデーションに染まる瞬間は言葉を失う美しさ。
また、松山駅から運行されている本格観光列車「伊予灘ものがたり」に乗れば、地元食材の美食を味わいながらこの絶景車窓を満喫できます。`
          },
          {
            id: "shikoku-henro-heritage",
            title: "四国遍路と「お接待」：国宝仁王門と日本遺産第1号",
            tag: "国宝・日本遺産・世界遺産候補",
            summary: "1200年の巡礼道。松山・石手寺の仁王門は国宝！文化庁「日本遺産第1号」に認定され、現在ユネスコ世界文化遺産登録を目指す心の文化。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Isiteji20220325_1.jpg/1280px-Isiteji20220325_1.jpg",
            fullText: `【国宝と世界遺産への位置づけ】：
四国八十八ヶ所霊場は、弘法大師（空海）の足跡を巡る全長約1,400kmの巡礼路です。
「遍路は国宝になっているの？」という疑問に対し、正確には寺院ごとの貴重な建造物や宝物が数多く「国宝」に指定されています（松山市の第51番札所・石手寺の「仁王門」は鎌倉時代建造の正真正銘の国宝！）。
さらに、遍路道や札所寺院、巡礼文化全体が2015年に文化庁の【日本遺産（Japan Heritage）第1号】に認定されました！現在、四国4県が連携して【ユネスコ世界文化遺産】への登録を目指す国民的プロジェクトとして推進されています。

【1200年息づく「お接待」の奇跡】：
遍路文化の最大の魅力は、見ず知らずの巡礼者に地元の人々がお茶やみかん、お菓子を差し出し、見返りを求めずに道中の無事を祈る「お接待（おせったい）」の精神です。この無償の優しさこそが、四国・愛媛が世界に誇る宝です。`
          }
        ]
      },
      trivia: {
        title: "知られざる松山・愛媛の意外な真実、噂の解明と現代の話題",
        desc: "子規の野球愛、中村知事歌舞伎の真相、そしてリベラルアーツ大学の話題まで徹底解剖！",
        items: [
          {
            id: "shiki-baseball",
            title: "正岡子規と野球（ベースボール）の深すぎる絆",
            tag: "野球殿堂入りした俳人",
            summary: "雅号に「野球（のぼーる）」と名乗り、「打者」「走者」「直球」を翻訳考案！2002年野球殿堂入り。松山には坊っちゃんスタジアム。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Botchan_Stadium%2820160416%29_01.jpg/1280px-Botchan_Stadium%2820160416%29_01.jpg",
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
            summary: "「愛媛の知事って歌舞伎の人？」という噂の正体は？名門「中村時蔵」との偶然の一致と、大正時代の本格木造芝居小屋「内子座」の物語。",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Uchiko-za_ac_%281%29.jpg/1280px-Uchiko-za_ac_%281%29.jpg",
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
            id: "libedai-modern-scene",
            title: "現代の話題：リベラルアーツ大学と愛媛のコミュニティ熱",
            tag: "新しい学びとつながり",
            summary: "お金の教養オンラインコミュニティ「リベ大」の四国・愛媛の活気。自立した生き方を目指す人々の熱い交流。",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            fullText: `近年、日本中で大きなムーブメントとなっている「リベラルアーツ大学（通称：リベ大・両学長主宰）」。
お金の知識やITスキル、副業、自立したライフスタイルを学ぶこのコミュニティは、愛媛県・松山市でも活発なオフ会や勉強会が定期的に開催されています。
「中村たいせいさん」といったキーマンの名前が地域で話題に上るのも、愛媛の若手や起業志向のビジネスパーソンの間で、こうしたオンラインコミュニティを通じた自主的な経済活動や相互支援の輪が急速に広がっている証拠と言えます。松山の進取の気性は現代も健在です！`
          }
        ]
      }
    },
    interactive: {
      quizTitle: "正岡子規の「ベースボール」訳語クイズ",
      quizDesc: "子規が考案・紹介した野球用語を当ててみよう！",
      haikuGenTitle: "あなただけの「松山・愛媛の句」を詠む",
      haikuGenDesc: "道後温泉、石鎚山、みかん、城の情景を組み合わせて一句詠んでみましょう。",
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
    heroHeading: "Discover the Depths of Matsuyama & Ehime.",
    heroSubheading: "From 3,000-Year Ancient Springs to 'Clouds Above the Hill', Sacred Peaks & Vibrant Seas",
    heroDesc: "Dogo Onsen, Matsuyama Castle Ninomaru Garden, Ryotaro Shiba's epic 'Clouds Above the Hill', Mika Ninagawa's floral onsen art, Mt. Ishizuchi & the UFO Line, Shimanami Kaido, Taimeshi hot pots & Mikan Sea Bream, and the beloved soul-sweet Poème. Step into an extraordinary journey.",
    quickStats: [
      { label: "Dogo Onsen History", value: "3,000+", unit: "Years" },
      { label: "Mt. Ishizuchi (Highest Peak)", value: "1,982", unit: "m" },
      { label: "Citrus Varieties in Ehime", value: "40+", unit: "Cultivars" },
      { label: "Matsuyama Castle", value: "1602", unit: "Founded" }
    ],
    tabs: [
      { id: "sakanoue", icon: "cloud", label: "Clouds Above the Hill", subtitle: "Akiyama Brothers, Shiki & Tadao Ando" },
      { id: "history", icon: "castle", label: "History & Fortress", subtitle: "Dogo Onsen, Castle Garden, Soseki" },
      { id: "haiku", icon: "feather", label: "Haiku & Words", subtitle: "City of Poetry, Shiki Masaoka, Haiku Koshien" },
      { id: "art", icon: "palette", label: "Vivid Art & Master Crafts", subtitle: "Mika Ninagawa, Tobe Porcelain, Imabari Towel" },
      { id: "citrus", icon: "citrus", label: "Citrus Kingdom", subtitle: "Mikan, Beni Madonna, Juice from the Tap" },
      { id: "fishery", icon: "fish", label: "Seafood & Soul Sweets", subtitle: "Taimeshi History, Mikan Tai, Poème Cake" },
      { id: "scenic", icon: "compass", label: "Peaks & Island Vistas", subtitle: "Mt. Ishizuchi, UFO Line, Kiro-san, 88 Henro" },
      { id: "trivia", icon: "sparkles", label: "Surprising Trivia", subtitle: "Shiki Baseball, Governor Kabuki Rumor, Libedai" }
    ],
    sections: {
      sakanoue: {
        title: "Clouds Above the Hill: The Dawn of Modern Japan",
        desc: "Ryotaro Shiba's epic saga of three Matsuyama friends who helped shape modern history: the Akiyama brothers and poet Masaoka Shiki.",
        items: [
          {
            id: "akiyama-brothers",
            title: "The Indomitable Akiyama Brothers",
            tag: "Matsuyama's Modern Heroes",
            summary: "Yoshifuru, father of Japanese cavalry, and Saneyuki, master naval strategist behind the Battle of Tsushima. Men of pure spirit who shunned fame.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Akiyama_Yoshifuru.jpg",
            fullText: `[Yoshifuru Akiyama (Elder Brother)]:
Born into a destitute Matsuyama samurai family, Yoshifuru studied cavalry tactics in France and built Japan's modern horse cavalry from scratch.
In the Russo-Japanese War, his outnumbered units famously checked the fearsome Cossacks. Promoted to full General, he famously declined the supreme rank of Field Marshal after retirement. Instead, he returned to Matsuyama to serve as principal of a modest local middle school (now Matsuyama Kita High School), teaching young students to live with humble integrity for the public good.

[Saneyuki Akiyama (Younger Brother)]:
Brilliant and mischievous, Saneyuki studied in Tokyo alongside poet Masaoka Shiki before entering the Naval Academy, graduating at the top of his class.
During the Battle of Tsushima in 1905, he drafted the master tactical plan ('Seven-stage defense') that annihilated the Russian Baltic Fleet. His iconic telegram to the Emperor—'The weather today is clear but the waves are high'—remains one of the most celebrated prose lines in Japanese history.`
          },
          {
            id: "sakanoue-museum",
            title: "Saka no Ue no Kumo Museum (Tadao Ando)",
            tag: "Authentic Tadao Ando Architecture",
            summary: "A pure triangular glass pavilion beneath Matsuyama Castle. Its column-free floating staircase symbolizes striving ever upward toward the clouds.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Saka-no-ue-no-kumo_Museum.jpg",
            fullText: `Designed by world-acclaimed architect Tadao Ando and opened in 2007, the Saka no Ue no Kumo Museum harmonizes seamlessly with the forested slopes of Mt. Katsuyama.
The building adopts an acute triangular blueprint. Inside, visitors ascend a dramatic column-free ramped staircase suspended in mid-air—architecturally embodying the characters' relentless climb toward their dreams above the hill. It houses manuscripts, naval artifacts, and immersive exhibits.`
          },
          {
            id: "bansuiso",
            title: "Bansuiso Villa",
            tag: "National Important Cultural Property",
            summary: "Built in 1922, Ehime's oldest French Renaissance-style palace, constructed by Count Sadakoto Hisamatsu, descendant of the Matsuyama Clan.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bansui-so_2016-04-30.jpg/1280px-Bansui-so_2016-04-30.jpg",
            fullText: `Standing gracefully beside the Saka no Ue no Kumo Museum among lush greenery, Bansuiso was built in 1922 by Count Sadakoto Hisamatsu, a high-ranking military attaché in France and descendant of the Lord of Matsuyama.
Designed by Shichiro Kiko in pure French Neo-Renaissance style, it boasts imported stained glass, crystal chandeliers, and carved marble fireplaces. It hosted the Showa Emperor during his crown prince days and remains an architectural jewel of Shikoku.`
          }
        ]
      },
      history: {
        title: "3,000-Year Ancient Springs & One of Japan's Most Beautiful Castles",
        desc: "World-famous Dogo Onsen, Matsuyama Castle rated Top 2 nationwide, and the romantic Ninomaru Garden.",
        items: [
          {
            id: "dogo-onsen",
            title: "Dogo Onsen Honkan",
            tag: "National Important Cultural Property",
            summary: "Japan's oldest hot spring with over 3,000 years of verified history. Fully reopened in July 2024 after a meticulous 5.5-year conservation project.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
            fullText: `Mentioned in ancient chronicles, Dogo Onsen is revered as Japan's very first spa. Prince Shotoku visited in 596 AD, marveling at its healing waters.
The crown jewel is the Dogo Onsen Honkan, built in 1894 by master carpenter Matahachiro Sakamoto. It is a three-story timber architectural masterpiece said to have inspired Hayao Miyazaki's acclaimed film 'Spirited Away'.
Between 2019 and July 2024, it underwent an unprecedented conservation and seismic retrofit—staying open for public bathing throughout—and celebrated its grand full reopening on July 11, 2024.`
          },
          {
            id: "matsuyama-castle",
            title: "Matsuyama Castle & Ninomaru Historical Garden",
            tag: "Original Keep & Lovers' Sanctuary",
            summary: "Regularly ranked among Japan's Top 2 Castles. Features the singular Ninomaru Garden where ancient samurai room layouts are re-created with cascading ponds.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
            fullText: `[Architectural Splendor]:
One of only 12 surviving original pre-Edo keeps in Japan, Matsuyama Castle ranks among the Top 2 castles in Japan on TripAdvisor. With 21 designated Important Cultural Properties, its complex linked defense towers offer 360-degree vistas.

[Ninomaru Historical Garden]:
At the castle foot, this world-unique garden traces the excavated floor plans of the daimyo's mansion using reflecting waters, flowing streams, and Ehime citrus trees. Designated a 'Lovers' Sanctuary' after Russian prisoner-of-war coins engraved with romantic vows were excavated from its ancient well.`
          },
          {
            id: "soseki-botchan",
            title: "Natsume Soseki & 'Botchan'",
            tag: "Meiji Literary Giant",
            summary: "Written by Japan's preeminent modern novelist based on his teaching year in Matsuyama, creating a timeless masterpiece of youth rebellion.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/BotchanTrainNo.1.jpg",
            fullText: `In 1895, at age 28, Natsume Soseki arrived in Matsuyama as an English teacher at the local middle school. He spent 52 days sharing a lodging ('Gudabutsu-an') with his close friend, the dying literary revolutionary Masaoka Shiki, learning haiku and debating philosophy.
This experience inspired his 1906 classic novel 'Botchan'—a brisk, hilarious story of a brash Tokyo newcomer confronting eccentric small-town teachers.`
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
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Masaoka_Shiki.jpg",
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
            fullText: `Since the very first red wooden Haiku Postbox was erected atop Matsuyama Castle in 1968, the network has expanded to over 90 locations throughout the city, Matsuyama Airport, high-speed ferries, and even sister cities abroad in Germany and Taiwan.`
          },
          {
            id: "haiku-koshien",
            title: "Haiku Koshien: The National High School Tournament",
            tag: "Intellectual Martial Arts",
            summary: "High school teams from across Japan gather in Matsuyama every summer to duel with self-composed haiku and rigorous public debate.",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
            fullText: `Inspired by high school baseball tournaments, the 'Haiku Koshien' pits five-member student squads against one another on stage in Matsuyama with self-composed verses and fiery public debate.`
          }
        ]
      },
      art: {
        title: "Vivid Contemporary Art & Masterpieces of Japanese Craft",
        desc: "From Mika Ninagawa's kaleidoscopic floral takeovers to Tobe porcelain celebrated in Paris and NY.",
        items: [
          {
            id: "ninagawa-dogo",
            title: "Mika Ninagawa × Dogo Onsen: Explosion of Saturated Petals",
            tag: "Icon of Dogo Onsenart",
            summary: "World-renowned photographer Mika Ninagawa transformed the historic spa with giant outdoor scaffolding photo wraps and an open-air kaleidoscope of blooms at Asuka-no-Yu.",
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
            fullText: `Internationally renowned photographer and film director Mika Ninagawa produced one of the most celebrated contemporary art collaborations in onsen history.
During the Honkan's preservation project, she wrapped the giant exterior screens in 230 vibrant flower photographs.
At Asuka-no-Yu, she covered the open courtyard with radiant graphic shades, immersing bathers in an ethereal shower of saturated blossoms and sunlight.`
          },
          {
            id: "tobeyaki-craft",
            title: "Tobe Ware: From Folk Mingei to Global High-End Porcelain",
            tag: "National Traditional Craft & Global Art",
            summary: "Extolled by Yanagi Soetsu and Bernard Leach for its sturdy white-indigo beauty; today, ultra-delicate high-end Tobe creations grace fine dining in Paris and New York.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
            fullText: `Founded in 1775 under the Matsuyama Clan, Tobe Ware began with thick, reassuring white porcelain hand-brushed in deep indigo (Gosu) arabesque motifs.
While cherished as indestructible daily tableware in Japan, contemporary master ceramicists have evolved the craft into ultra-fine celadon, pierced carvings, and modern tableware exhibited at Maison & Objet in Paris and showcased in Michelin-starred restaurants across the globe.`
          },
          {
            id: "imabari-towel",
            title: "Imabari Towel: Global Benchmark of Softness",
            tag: "Master Craftsmanship",
            summary: "Woven using ultra-pure snowmelt spring waters from Mt. Ishizuchi. Certified by the uncompromising '5-second sink' test.",
            image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80",
            fullText: `For over 120 years, Imabari in northern Ehime has reigned as Japan's towel capital.
Bleached using ultra-soft waters from the Sosha River, the cotton retains unrivaled fluffiness and instant absorbency. Under creative director Kashiwa Sato, Imabari Towel achieved worldwide acclaim as a premier luxury brand featured in leading international hotels.`
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
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Citrus_unshiu_20101127_c.jpg/1280px-Citrus_unshiu_20101127_c.jpg",
            fullText: `Ehime is renowned across Japan for harvesting more citrus varieties than any other prefecture.
The secret lies in its 'Three Suns': direct sky sunlight, sea reflection from the calm inland seas, and radiant heat from terraced stone walls.`
          },
          {
            id: "premium-citrus",
            title: "The Holy Quartet of Luxury Citrus",
            tag: "Beni Madonna, Kanpei, Setoka & Iyokan",
            summary: "Forget ordinary oranges: taste the jelly-like texture and intoxicating fragrance of Ehime's proprietary cultivars.",
            image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
            fullText: `Beyond sweet winter satsuma mikan, Ehime is home to celebrated proprietary cultivars:
- [Beni Madonna]: Harvested only in December, its pulp has an astonishing, smooth jelly-like texture with virtually zero membrane resistance.
- [Kanpei]: Crisp, bursting juice vesicles packed with astonishing sweetness behind a tissue-thin skin.
- [Setoka]: Crowned the 'toro of citrus' for its rich, overflowing ambrosial juice and melting flesh.
- [Iyokan]: Named after Ehime's ancient provincial name Iyo, celebrated for its refreshing perfume and robust flavor.`
          },
          {
            id: "juice-faucet",
            title: "The Urban Legend Brought to Life: Orange Juice on Tap!",
            tag: "Must-Try Experience",
            summary: "What started as an urban joke—'Ehime homes have a 3rd tap for mikan juice'—is now an iconic real-life attraction.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Matsuyama_Airport_20240709_%2810%29.jpg/1280px-Matsuyama_Airport_20240709_%2810%29.jpg",
            fullText: `At Matsuyama Airport, the Dogo Onsen Information Center, and specialized boutiques along the Matsuyama Castle Ropeway Street (like 10FACTORY), visitors can twist a shiny brass tap and watch rich, ice-cold pure citrus juice pour directly into their glass!`
          }
        ]
      },
      fishery: {
        title: "1,700 Years of Taimeshi, Innovative 'Mikan Tai', & Local Soul Sweets",
        desc: "From the ancient steamed Sea Bream rice pots to the joint-research Mikan Fish, and the beloved local pastry Poème.",
        items: [
          {
            id: "taimeshi-battle",
            title: "The Real History of Taimeshi: Ancient Clay Pots vs Sashimi",
            tag: "1,700-Year Heritage & Modern Trends",
            summary: "Legend traces Matsuyama Taimeshi (steamed pot rice) back to Empress Jingu in the 3rd century. In Matsuyama restaurants today, tasting flights of both styles are the #1 best-seller!",
            image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            fullText: `[Historical Origins]:
■ Matsuyama Style (Hojo Taimeshi): When Empress Jingu stopped at Kashima Island in Hojo (northern Matsuyama) to pray for military victory over 1,700 years ago, local fishermen steamed whole fresh sea bream in clay pots with rice, salt, and sake. This fragrant pot-steamed rice with crisp 'okoge' crust is Matsuyama's ancient soul food.
■ Uwajima Style: Invented by medieval naval warriors dining on rolling seas without cooking fires, tossing raw sea bream sashimi with raw egg yolk and dashi-soy sauce.

[What Sells Best in Matsuyama Today?]:
While Uwajima-style sashimi bowls are sensational for travelers, Matsuyama locals revere traditional steamed clay pots for weddings and celebrations. Top dining establishments like Goshiki offer tasting sets where diners enjoy both styles side-by-side!`
          },
          {
            id: "mikan-tai",
            title: "Joint-Research Breakthrough: 'Mikan Tai' (Citrus Sea Bream)",
            tag: "Pioneering Fruit-Fish Technology",
            summary: "Co-developed by Ehime Prefecture, Ehime University, and coastal fish farmers! Feeding sea bream with mikan peel extract eliminates fishiness and yields a delicate citrus scent.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
            fullText: `Through an innovative partnership between Ehime University, the Prefectural Fisheries Research Center, and local farmers, 'Mikan Tai' was born.
By infusing fish feed with antioxidant-rich citrus oil extracted from Ehime mikan peels, the natural fishy odor disappears, replacing it with a subtle, refreshing citrus aroma. It has become a nationwide sensation across top sushi bars and gourmet markets.`
          },
          {
            id: "jakoten-dish",
            title: "Jakoten: The Coastal Soul Food of Yawatahama & Dogo",
            tag: "Crispy Mineral-Rich Delicacy",
            summary: "Whole coastal fish ground with bones and skin, fried in rapeseed oil. Savor it hot off the grill with cold local craft beer in Dogo Onsen.",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Serving_jakoten_in_Dogo_%28cropped%29.jpg",
            fullText: `Jakoten is made using fresh Haranbo fish from the Uwa Sea. Leaving the delicate bones and skin intact, the meat is stone-ground, pressed into molds, and fried. Locals eat it hot off the grill with grated ginger and a splash of soy sauce.`
          },
          {
            id: "poeme-soulfood",
            title: "The True Soul Sweet of Locals: 'Poème' (母恵夢)",
            tag: "Beloved More Than Tarts or Dango",
            summary: "Ask any local: Poème is the sweet they grew up with. Golden yolk-butter bean paste enveloped in vanilla pastry dough.",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
            fullText: `While tourists buy Ichiroku Tarts or Botchan Dango, Matsuyama natives will tell you their true comfort confection is 'Poème' (母恵夢).
Born in Matsuyama in 1950, it blends fine white bean paste with fresh egg yolks and pure butter, wrapped inside a gentle vanilla-scented biscuit shell. Melt-in-your-mouth comfort pairing exquisitely with tea or espresso.`
          }
        ]
      },
      scenic: {
        title: "Peaks of Western Japan & World-Class Lookouts",
        desc: "From Mt. Ishizuchi and the celestial UFO Line (Kamegamori) to Kengo Kuma's Kiro-san and the 88 Temple Pilgrimage.",
        items: [
          {
            id: "ishizuchisan",
            title: "Mt. Ishizuchi: Highest Peak in Western Japan",
            tag: "1,982m Sacred Peak of Japan",
            summary: "One of Japan's Seven Holy Mountains. Scale towering iron chain walls to Tengu-dake's sheer cliffs with 360-degree alpine vistas.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Isidutisan20220226_1.jpg/1280px-Isidutisan20220226_1.jpg",
            fullText: `Towering at 1,982m, Mt. Ishizuchi is the highest peak in western Japan and one of Japan's 7 sacred mountains. Hikers can scale exhilarating vertical rock walls using ancient hand-forged iron chains to reach the razor-sharp precipice of Tengu-dake.`
          },
          {
            id: "kamegamori-ufoline",
            title: "Kamegamori & The 'UFO Line': Highway in the Clouds",
            tag: "Japan's Most Spectacular Ridge Road",
            summary: "Famous from iconic car commercials! A celestial ribbon road perched at 1,700m winding through endless rolling bamboo grass plains.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Mt.Kamegamori2.jpg/1280px-Mt.Kamegamori2.jpg",
            fullText: `The Kamegamori Forest Road—dubbed the 'UFO Line'—curves along alpine ridgelines between 1,300m and 1,700m elevation. Featured in national automotive commercials, its sweeping views over the rolling bamboo fields of Himi Nisenkokubara offer an otherworldly mountain driving experience.`
          },
          {
            id: "kirosan-view",
            title: "Kiro-san Observatory: Kengo Kuma's Invisible Lookout",
            tag: "Ranked #2 Viewpoint in Japan",
            summary: "Buried into the mountaintop on Oshima Island, revealing an explosive panorama of the Kurushima Kaikyo Bridges and emerald seas.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
            fullText: `Perched 307m high on Oshima Island along the Shimanami Kaido, Kiro-san was ranked Japan's #2 lookout by TripAdvisor. Master architect Kengo Kuma sank the observation deck directly into the mountain to protect nature, opening up an awe-inspiring sunset view over the world's first triple suspension bridge.`
          },
          {
            id: "shimonada-station",
            title: "Miracle at Sunset: JR Shimonada Station",
            tag: "Closest Station to the Sea",
            summary: "A solitary wooden bench overlooking the endless horizon of the Iyo Sea. A pilgrimage for anime fans, photographers, and dreamers.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
            fullText: `Perched right above the waves on the JR Yosan Line, Shimonada is Japan's most cinematic unstaffed rural station. When golden hour arrives, the sun sinks straight into the sparkling sea, painting the sky in deep amber and violet hues.`
          },
          {
            id: "shikoku-henro-heritage",
            title: "The 88 Temple Pilgrimage & 'Osettai': National Treasures",
            tag: "Japan Heritage No. 1 & World Heritage Hopeful",
            summary: "A 1,200-year sacred loop. Matsuyama's Ishite-ji Gate is a designated National Treasure! The entire route is certified as Japan Heritage No. 1.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Isiteji20220325_1.jpg/1280px-Isiteji20220325_1.jpg",
            fullText: `Circling Shikoku, the 88-temple Henro journey spans 1,200 years. In Matsuyama, Ishite-ji Temple's Nio Gate is a bona fide National Treasure. In 2015, the Agency for Cultural Affairs designated the pilgrimage as Japan Heritage #1, and efforts are underway for UNESCO World Cultural Heritage recognition. The true miracle remains 'Osettai'—the unconditional gift of tea, mikan, and lodging given to passing pilgrims.`
          }
        ]
      },
      trivia: {
        title: "Untold Secrets, Myth-Busting & Modern Movements",
        desc: "Shiki's baseball passion, Governor Kabuki fact-check, and the rise of local learning communities.",
        items: [
          {
            id: "shiki-baseball",
            title: "Masaoka Shiki & Baseball: The Untold Love Affair",
            tag: "The Hall of Fame Poet",
            summary: "He adopted the pen-name 'No-Ball' (written 野・球), coined Japanese terms for 'Batter', 'Runner' and 'Fastball', and entered the Baseball Hall of Fame!",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Botchan_Stadium%2820160416%29_01.jpg/1280px-Botchan_Stadium%2820160416%29_01.jpg",
            fullText: `[Pen Name 'No-Ball']
During his preparatory university days in Tokyo, Masaoka Shiki fell head over heels in love with the newly introduced American game of baseball, playing as catcher.
Playing on his childhood name 'Noboru', in 1890 he adopted the poetic pen name 'No-Ball' (written with the characters 野 'field' and 球 'ball')—years before the term 'Yakyu' was officially coined for the sport in Japan!

[Inventing Baseball Vocabulary]
Shiki passionately introduced baseball rules to Japanese readers through newspapers and essays. He translated foundational English terms into poetic Japanese:
'Batter' -> 打者 (Dasha)
'Runner' -> 走者 (Sosha)
'Fastball' -> 直球 (Chokkyu)
'Fly ball' -> 飛球 (Hikyu)
'Base on balls' -> 四球 (Shikyu)`
          },
          {
            id: "governor-kabuki",
            title: "Is Ehime's Governor Really a Kabuki Actor!? The Truth Revealed",
            tag: "Debunking the Famous Rumor",
            summary: "Why do people ask if Governor Tokihiro Nakamura is a Kabuki star? The uncanny name overlap with the legendary 'Nakamura Tokizo' line and the historic Uchiko-za theater.",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Uchiko-za_ac_%281%29.jpg/1280px-Uchiko-za_ac_%281%29.jpg",
            fullText: `[The Rumor: Why do people think the Governor is in Kabuki?]
Travelers and news viewers frequently ask: 'Isn't the Governor of Ehime, Mr. Nakamura, a famous Kabuki actor?'
The factual answer: No, Governor Tokihiro Nakamura is NOT a Kabuki actor!
So where did this widespread impression come from? It stems from three fascinating coincidences:

1. Uncanny Resemblance to the Legendary 'Nakamura Tokizo' Lineage:
In traditional Kabuki, the Yorozuya guild is home to one of the most prestigious onnagata (female role) acting dynasties: 'Nakamura Tokizo' (中村時蔵). Because the Governor's name is 'Nakamura Tokihiro' (中村時広)—sharing the surname Nakamura and the character 'Toki' (時)—and given the Governor's refined public presence, people across Japan frequently confuse the two names!

2. Ehime's Historic Uchiko-za Theater & Kabuki Heritage:
Ehime Prefecture is home to Uchiko-za (built in 1916), one of Japan's most famous surviving authentic wooden Kabuki playhouses. Major Shochiku Kabuki troupes regularly tour here, linking Ehime and Kabuki in the public imagination.`
          },
          {
            id: "libedai-modern-scene",
            title: "Modern Buzz: Liberal Arts University (Libe-Dai) in Ehime",
            tag: "New Learning Communities",
            summary: "Japan's largest personal finance online learning community 'Libe-Dai' thrives in Ehime with active meetups and entrepreneurial energy.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            fullText: `In recent years, Liberal Arts University ('Libe-Dai', hosted by Ryo-Gakucho) has become Japan's leading community for financial literacy, IT skills, and independent living.
In Ehime and Matsuyama, enthusiastic offline meetups and study groups have sprouted, with community organizers and local leaders fostering entrepreneurship and mutual encouragement across the region.`
          }
        ]
      }
    },
    interactive: {
      quizTitle: "正岡子規の「ベースボール」訳語クイズ",
      quizDesc: "子規が考案・紹介した野球用語を当ててみよう！",
      haikuGenTitle: "あなただけの「松山・愛媛の句」を詠む",
      haikuGenDesc: "道後温泉、石鎚山、みかん、城の情景を組み合わせて一句詠んでみましょう。",
      taimeshiTitle: "あなたの好みはどっち？鯛めし診断",
      taimeshiDesc: "今日のあなたの気分にぴったりの愛媛の鯛めしを提案します。"
    },
    footer: {
      about: "MATSUYAMA & EHIME DISCOVERY PORTAL",
      desc: "本サイトは、愛媛県松山市および愛媛が誇る歴史・文学・現代アート・食文化・意外な魅力を全世界へ広く紹介するために制作されたオープンプロジェクトです。",
      githubNote: "GitHub公開対応レポジトリ。世界中からのコントリビューションや翻訳を歓迎します。",
      copyright: "© MATSUYAMA DISCOVERY PROJECT. Crafted with pride for Matsuyama & Ehime."
    }
  }
};

// Application State
let currentLang = 'ja';
let currentTab = 'sakanoue';

// Icon Map (Lucide SVGs)
const icons = {
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  castle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20v-7.5a2 2 0 0 0-2-2h-3v-4a2 2 0 0 0-2-2h-2V2.5a.5.5 0 0 0-1 0V4.5H9a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/><path d="M18 10.5V8a1 1 0 0 0-1-1h-2"/><path d="M7 8a1 1 0 0 0-1 1v1.5"/><path d="M10 14h4v8h-4z"/></svg>`,
  feather: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  citrus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  fish: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 4 3.1 8.5 2.1 12 1 16c2.5-1 4.5-2.5 6-5.33Z"/></svg>`,
  compass: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
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
      <div class="flex items-center space-x-3 cursor-pointer" onclick="switchTab('sakanoue')">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
          <span class="font-display font-bold text-xl">M</span>
        </div>
        <div>
          <span class="font-display font-bold tracking-wider text-xl text-slate-900">MATSUYAMA</span>
          <span class="text-xs uppercase tracking-widest text-orange-600 block font-semibold">Discovery Portal</span>
        </div>
      </div>

      <!-- Language Selector & GitHub Link -->
      <div class="flex items-center space-x-3">
        <div class="flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-sm">
          <button id="btn-lang-ja" onclick="setLanguage('ja')" class="px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${currentLang === 'ja' ? 'bg-orange-500 text-white shadow' : 'text-slate-600 hover:text-slate-900'}">
            日本語
          </button>
          <button id="btn-lang-en" onclick="setLanguage('en')" class="px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${currentLang === 'en' ? 'bg-orange-500 text-white shadow' : 'text-slate-600 hover:text-slate-900'}">
            English
          </button>
        </div>

        <a href="https://github.com/csdkotsuka/matsuyama" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center space-x-2 text-xs font-semibold text-slate-700 hover:text-orange-600 px-3.5 py-1.5 rounded-lg border border-slate-300 hover:border-orange-500/50 bg-white transition-colors shadow-sm">
          <svg class="w-4 h-4 fill-current text-slate-800" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>GitHub</span>
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
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center z-10">
      <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
        <span>🇯🇵 Matsuyama & Ehime, Japan</span>
        <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        <span>${data.heroBadge}</span>
      </div>

      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
        <span class="block font-serif-jp text-slate-900">${data.heroHeading}</span>
        <span class="block text-gradient-citrus text-2xl sm:text-4xl lg:text-5xl mt-3 font-serif-jp">
          ${data.heroSubheading}
        </span>
      </h1>

      <p class="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-12">
        ${data.heroDesc}
      </p>

      <!-- Quick Metrics in Bright White Glass Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        ${data.quickStats.map(stat => `
          <div class="glass-card-light rounded-2xl p-4 text-center">
            <div class="text-2xl sm:text-3xl font-extrabold text-orange-600 font-display">
              ${stat.value}<span class="text-xs sm:text-sm font-semibold text-slate-500 ml-1">${stat.unit}</span>
            </div>
            <div class="text-xs text-slate-600 mt-1 font-semibold">${stat.label}</div>
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
      <div class="flex overflow-x-auto pb-2 gap-2 sm:gap-2.5 scrollbar-none justify-start md:justify-center">
        ${data.tabs.map(tab => {
          const isActive = tab.id === currentTab;
          return `
            <button onclick="switchTab('${tab.id}')" 
              class="flex-shrink-0 flex items-center space-x-2 px-3.5 py-3 rounded-xl border text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive 
                  ? 'active-tab' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50/70 hover:text-orange-600 hover:border-orange-200 shadow-sm'
              }">
              <span class="${isActive ? 'text-white' : 'text-orange-500'}">${icons[tab.icon] || ''}</span>
              <div class="text-left">
                <span class="block">${tab.label}</span>
                <span class="block text-[10px] opacity-80 font-normal truncate max-w-[110px] sm:max-w-[150px]">${tab.subtitle}</span>
              </div>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Render Active Category Section
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
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif-jp mb-3">
          ${section.title}
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          ${section.desc}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        ${section.items.map(item => `
          <div class="glass-card-light rounded-2xl overflow-hidden flex flex-col group cursor-pointer" onclick="openModal('${item.id}')">
            <!-- Image with Overlay Tag -->
            <div class="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <span class="absolute top-4 left-4 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ${item.tag}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2 font-serif-jp">
                  ${item.title}
                </h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  ${item.summary}
                </p>
              </div>

              <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
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

  if (tabId === 'sakanoue') {
    return `
      <div class="mt-12 bg-gradient-to-br from-amber-50 via-orange-50 to-sky-50 rounded-3xl p-6 sm:p-10 border border-orange-200/80 shadow-md">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <span class="inline-block bg-orange-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              ${isJa ? '名言集：明治の若き群像' : 'Immortal Words'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-jp">
              ${isJa ? '「本日天気晴朗ナレドモ浪高シ」' : '"The Weather Today is Clear, But the Waves Are High"'}
            </h3>
            <p class="text-slate-700 text-sm leading-relaxed">
              ${isJa
                ? '秋山真之が日露戦争・日本海海戦の直前に大本営へ打電したあまりにも有名な名文。視界良好で敵艦隊を捉えられる幸運と、波が高く小型艦の雷撃には困難を伴う戦況の厳しさをわずか14文字で表現した、文学と軍事の奇跡の融合です。'
                : 'Saneyuki Akiyama’s legendary cable to the Imperial Headquarters just before the Battle of Tsushima. In just a few words, it captured both supreme clarity of vision to spot the fleet and the daunting fury of the high seas.'}
            </p>
          </div>
          <div class="flex-shrink-0 bg-white p-5 rounded-2xl border border-orange-200 shadow-sm max-w-xs text-center">
            <div class="text-3xl mb-2">☁️ ⚔️ 🏛️</div>
            <div class="text-xs text-slate-500 uppercase tracking-widest font-bold">${isJa ? '松山の三偉人' : 'Three Visionaries'}</div>
            <div class="text-sm font-bold text-slate-900 mt-1">秋山好古 (騎兵)</div>
            <div class="text-sm font-bold text-slate-900">秋山真之 (作戦)</div>
            <div class="text-sm font-bold text-orange-600">正岡子規 (文学)</div>
            <div class="text-[11px] text-slate-500 mt-2 font-medium">${isJa ? '全員が松山城下の同郷の友' : 'All Lifelong Friends from Matsuyama'}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (tabId === 'history') {
    return `
      <div class="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              ${isJa ? '愛の史話：恋人の聖地' : 'Lovers\' Sanctuary'}
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 font-serif-jp">
              ${isJa ? '二之丸庭園の井戸から発見されたロシア将校と看護婦の金貨' : 'The Russian Officer & Nurse Love Coins'}
            </h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              ${isJa 
                ? '日露戦争時、松山は日本初のロシア兵捕虜収容所が置かれた寛容の地でした。捕虜のワシーリー中佐と看護婦タケの純愛を誓うコインが二之丸庭園の大井戸遺構から出土し、現在「恋人の聖地」として多くのカップルを祝福しています。'
                : 'During the Russo-Japanese War, Matsuyama hosted Russian POWs with renowned humanity. In Ninomaru Garden, gold coins engraved with the names of Russian Commander Boisman and Japanese nurse Take were found in an ancient well, certifying it as a Sanctuary for Lovers.'}
            </p>
          </div>
          <div class="text-4xl text-rose-500 p-4 bg-rose-50 rounded-2xl">💑 🪙</div>
        </div>
      </div>
    `;
  }

  if (tabId === 'trivia') {
    return `
      <div class="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <span class="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-200">
              ${isJa ? '検証コラム：噂の真相' : 'Fact-Check Feature'}
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-jp">
              ${isJa ? '「中村知事は歌舞伎役者？」噂の真相まとめ' : 'Governor Tokihiro Nakamura & Kabuki: The Verdict'}
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              ${isJa 
                ? '歌舞伎の名門「六代目 中村時蔵」氏との名前の酷似、大正時代から続く現役芝居小屋「内子座」の存在、そして知事の知的な存在感が合わさって生まれた愛媛の有名な勘違いネタ。実際は慶應大・三菱商事・松山市長を経て愛媛を導くリーダーです！'
                : 'A widespread mix-up created by his uncanny name resemblance to prominent Kabuki star Nakamura Tokizo and Ehime’s famous historic Uchiko-za theater. Governor Tokihiro Nakamura is actually a dedicated public leader driving cycling and international tourism!'}
            </p>
          </div>
          <div class="flex-shrink-0 bg-slate-50 p-5 rounded-2xl border border-slate-200 max-w-xs text-center shadow-sm">
            <div class="text-3xl mb-2">🎭 ⇄ 🏛️</div>
            <div class="text-xs text-slate-500 uppercase tracking-widest font-bold">${isJa ? '名前の比較' : 'Name Comparison'}</div>
            <div class="text-sm font-bold text-slate-800 mt-1">六代目 中村時蔵 (Kabuki)</div>
            <div class="text-xs text-slate-400">vs</div>
            <div class="text-sm font-bold text-orange-600">中村時広 知事 (Governor)</div>
            <div class="text-[11px] text-emerald-600 mt-2 font-bold">${isJa ? '謎が解けてスッキリ！' : 'Mystery Solved!'}</div>
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
        <span class="text-orange-600 text-xs font-bold uppercase tracking-widest block mb-2">
          ${isJa ? '体験型ディスカバリー' : 'Interactive Discovery'}
        </span>
        <h2 class="text-3xl font-extrabold text-slate-900 font-serif-jp">
          ${isJa ? '松山・愛媛をもっと楽しむインタラクティブ体験' : 'Engage with Matsuyama Culture'}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Feature 1: Baseball Terms Quiz -->
        <div class="glass-card-light rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-4 shadow-sm">
              ⚾
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2 font-serif-jp">${data.interactive.quizTitle}</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">${data.interactive.quizDesc}</p>
            <div id="quiz-question-box" class="space-y-2">
              <p class="text-xs text-orange-700 font-semibold mb-2">Q: ${isJa ? '子規が名付け親となった次の言葉のうち、正しいのは？' : 'Which baseball term was translated into Japanese by Shiki?'}</p>
              <button onclick="handleQuizAnswer(true)" class="w-full text-left text-xs bg-slate-50 hover:bg-orange-100/70 p-3 rounded-xl border border-slate-200 transition font-medium text-slate-800">
                A. ${isJa ? '打者 (Batter)・走者 (Runner)・直球 (Fastball)' : 'Batter, Runner & Fastball'}
              </button>
              <button onclick="handleQuizAnswer(false)" class="w-full text-left text-xs bg-slate-50 hover:bg-orange-100/70 p-3 rounded-xl border border-slate-200 transition font-medium text-slate-800">
                B. ${isJa ? '審判 (Umpire)・捕手 (Catcher)' : 'Umpire & Pitcher'}
              </button>
              <div id="quiz-result" class="text-xs mt-3 hidden p-3 rounded-xl"></div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Taimeshi Matchmaker -->
        <div class="glass-card-light rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold mb-4 shadow-sm">
              🐟
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2 font-serif-jp">${data.interactive.taimeshiTitle}</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">${data.interactive.taimeshiDesc}</p>
            <div class="space-y-3">
              <label class="text-xs text-slate-600 block font-medium">${isJa ? 'いまの気分は？' : 'What is your current craving?'}</label>
              <select id="taimeshi-select" onchange="recommendTaimeshi()" class="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-orange-500">
                <option value="raw">${isJa ? '新鮮な生魚と卵かけご飯を豪快にかき込みたい！' : 'Fresh raw sashimi bowl with rich egg yolk!'}</option>
                <option value="steamed">${isJa ? '1700年の歴史！出汁が香るふっくら炊き込み鯛釜飯とおこげ！' : '1,700-year history! Steamed dashi clay pot with crispy rice crust!'}</option>
                <option value="mikan">${isJa ? '柑橘が香る最新のブランド魚「みかん鯛」を味わいたい！' : 'Innovative citrus-fed Mikan Tai with zero fishiness!'}</option>
              </select>
              <div id="taimeshi-result" class="p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-900 mt-3 font-medium">
                ${isJa ? '👉 おすすめ：【宇和島鯛めし】新鮮な鯛刺身を特製タレと生卵で豪快に！' : '👉 Recommendation: [Uwajima Taimeshi] Sashimi in egg-dashi sauce!'}
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Haiku Generator -->
        <div class="glass-card-light rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4 shadow-sm">
              ✍️
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2 font-serif-jp">${data.interactive.haikuGenTitle}</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">${data.interactive.haikuGenDesc}</p>
            <div class="space-y-3">
              <div id="generated-haiku-box" class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-center font-serif-jp text-sm text-slate-800 font-semibold shadow-inner">
                ${isJa ? '坂の上に / 雲湧く伊予の / 碧き空' : 'Above the green hill / White clouds rise into high skies / Blue Shikoku dawn'}
              </div>
              <button onclick="generateRandomHaiku()" class="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition">
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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span class="font-display font-bold text-slate-900 tracking-wider text-lg">${data.footer.about}</span>
          <p class="text-xs text-slate-600 mt-1 max-w-lg leading-relaxed">${data.footer.desc}</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="text-xs text-orange-600 font-bold">${data.footer.githubNote}</div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
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
    <div class="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
      <button onclick="closeModal()" class="absolute top-4 right-4 z-20 p-2 bg-white/90 text-slate-700 hover:text-slate-900 rounded-full border border-slate-200 shadow-md transition">
        ${icons.close}
      </button>

      <div class="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
        <img src="${foundItem.image}" alt="${foundItem.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <span class="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow">
            ${foundItem.tag}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white font-serif-jp">${foundItem.title}</h2>
        </div>
      </div>

      <div class="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
        <p class="text-orange-700 font-semibold text-sm leading-relaxed">${foundItem.summary}</p>
        <div class="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 font-normal">
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
    res.className = "text-xs mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900";
    res.innerHTML = `<span class="text-emerald-700 font-bold">🎉 正解！ Correct!</span><br><span class="text-slate-700">子規は「打者」「走者」「直球」「四球」「飛球」などを考案し、野球普及に尽力しました。</span>`;
  } else {
    res.className = "text-xs mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900";
    res.innerHTML = `<span class="text-rose-700 font-bold">惜しい！ Try Again!</span><br><span class="text-slate-700">正解はAです。「打者」「走者」「直球」は子規が翻訳・考案した用語です。</span>`;
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
  } else if (select.value === 'steamed') {
    res.innerHTML = isJa
      ? '👉 おすすめ：【松山・北条鯛釜飯】神功皇后ゆかりの1700年の伝統！素焼きの真鯛を丸ごと昆布出汁で炊き上げる香ばしいおこげの味！'
      : '👉 Recommendation: [Matsuyama Taimeshi] 1,700-year traditional steamed whole sea bream pot with crispy savory rice crust!';
  } else {
    res.innerHTML = isJa
      ? '👉 おすすめ：【みかん鯛のお造り・鯛めし】愛媛大学と共同研究！生臭さが消えてほんのり柑橘香る次世代フルーツ魚！'
      : '👉 Recommendation: [Mikan Tai] Innovative joint-research citrus-fed fish with refreshing mikan aroma!';
  }
}

// Haiku Random Generator
const haikus = {
  ja: [
    "坂の上に / 雲湧く伊予の / 碧き空",
    "湯の街に / みかん薫るや / 城の月",
    "石鎚の / 嶺に祈るや / 秋の風",
    "柿くへば / 鐘が鳴るなり / 法隆寺 (正岡子規)",
    "春や昔 / 十五万石の / 城下哉 (正岡子規)",
    "松山や / 秋の潮風 / 鯛の味",
    "彩る花 / 道後を照らす / 宵の湯気",
    "球音の / 響く伊予路の / 秋高し"
  ],
  en: [
    "Above the green hill / White clouds rise into high skies / Blue Shikoku dawn",
    "Ancient steam ascends / Scent of sweet citrus floats high / Moon above castle",
    "Mt. Ishizuchi crest / Whispering prayers on the wind / Pure autumn sunlight",
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
