// MATSUYAMA & EHIME - MODEL ITINERARIES & GOOGLE MAPS ROUTE ENGINE
// BILINGUAL & MULTI-STOP GPS COMPATIBLE

const itinerariesData = {
  ja: {
  "sectionBadge": "目的別・日程別の公式旅プラン",
  "sectionTitle": "来訪者・知人のための 松山・愛媛 観光モデルコース",
  "sectionSubtitle": "日帰り・1泊2日・2泊3日（＋3泊以上）の厳選ルート集",
  "sectionDesc": "「松山って3泊するほど見るものがないかも（笑）」という声をよく耳にしますが、実は市内中心部なら1泊で回れるほどコンパクトな一方、少し足を伸ばせば瀬戸内海の多島美、天空の稜線ロード、歴史ある小京都など、3泊でも足りないほどの豊かな見どころが広がっています。知り合いや来訪者のタイプに合わせて選べる、Google Mapsナビゲーション付きのモデルプランをご活用ください！",
  "filters": [
    {
      "id": "all",
      "label": "すべて表示"
    },
    {
      "id": "daytrip",
      "label": "⏱️ 日帰り (5〜7h)"
    },
    {
      "id": "1night",
      "label": "🏨 1泊2日"
    },
    {
      "id": "2nights",
      "label": "🌅 2泊3日"
    },
    {
      "id": "extra",
      "label": "⛰️ 3泊以上＋α"
    }
  ],
  "courses": [
    {
      "id": "daytrip-classic",
      "duration": "daytrip",
      "durationBadge": "日帰り（滞在目安 5〜7時間）",
      "categoryBadge": "王道ハイライト制覇コース",
      "title": "松山城・鯛めし・萬翠荘・道後温泉（車不要・名所凝縮）",
      "desc": "松山のエッセンスである「城・食・名湯」を最短で満喫する鉄板ルート。伊予鉄市内電車（路面電車）だけで完結するため、出張や四国周遊の立ち寄りにも最適です。",
      "transportType": "train",
      "transportLabel": "🚃 車不要・市内電車（1Dayパス推奨）",
      "targetLabel": "初めての松山・出張の合間・気軽な来訪",
      "costEst": "約4,000〜6,000円（入浴料・天守・ランチ込）",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=道後温泉本館&waypoints=松山城ロープウェイのりば%7C松山城天守%7C萬翠荘%7C坂の上の雲ミュージアム&travelmode=transit",
      "steps": [
        {
          "time": "11:00",
          "title": "JR松山駅 / 松山空港から市内中心部へ",
          "spot": "松山駅前 → 大街道（市内電車で約12分）",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/BotchanTrainNo.1.jpg",
          "desc": "JR松山駅前から伊予鉄市内電車（道後温泉行き）に乗り「大街道（おおかいどう）」電停へ。荷物はコインロッカーへ預けて身軽に出発！",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=大街道駅",
          "transitInfo": "🚃 伊予鉄市内電車で約12分"
        },
        {
          "time": "11:30",
          "title": "ロープウェイ街で宇和島鯛めしランチ＆みかん体験",
          "spot": "ロープウェイ街（丸水・かどや・10 FACTORY）",
          "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🥢 宇和島鯛めし（生卵と特製タレを絡めた鯛刺身） ＆ 🍊 蛇口からみかんジュース",
          "desc": "情緒あるロープウェイ街で、新鮮な真鯛に生卵と出汁を合わせる名物「宇和島鯛めし」をご飯にかき込む！食後は「10 FACTORY」で柑橘ジュースの飲み比べや蛇口みかん体験。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城ロープウェイ街",
          "transitInfo": "🚶 徒歩約3分で城山ロープウェイ乗り場へ"
        },
        {
          "time": "13:00",
          "title": "松山城 天守閣見学（リフトまたはロープウェイで登城）",
          "spot": "松山城 天守（日本現存12天守）",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "日本三大連立式平山城の美しい現存天守。風を感じる開放的なリフトでの登城がおすすめ。天守最上階からは松山市街と瀬戸内海の多島美が一望できます。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城天守",
          "modalId": "matsuyama-castle",
          "transitInfo": "🚶 リフトで下山後、徒歩約5分"
        },
        {
          "time": "15:00",
          "title": "萬翠荘 ＆ 坂の上の雲ミュージアム散策",
          "spot": "萬翠荘（国指定重文）＆ 坂の上の雲ミュージアム",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bansui-so_2016-04-30.jpg/1280px-Bansui-so_2016-04-30.jpg",
          "desc": "城の麓に佇むフランス・ルネサンス風の気品ある洋館「萬翠荘」と、安藤忠雄氏設計の三角形のモダン建築「坂の上の雲ミュージアム」を見学。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=萬翠荘",
          "modalId": "bansuiso",
          "transitInfo": "🚃 大街道電停から道後温泉行き市内電車で約10分"
        },
        {
          "time": "16:00",
          "title": "道後温泉本館 入浴 ＆ ハイカラ通り散策",
          "spot": "道後温泉本館（全館営業再開）＆ 道後商店街",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
          "gourmet": "🍡 坊っちゃん団子 ＆ 🍊 母恵夢（ポエム）お土産",
          "desc": "約5年半の保存修理を終えて全館営業再開した日本最古・3000年の古湯「道後温泉本館」へ。名湯で旅の疲れを癒やし、道後ハイカラ通りでお土産を購入＆足湯でまったり。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館",
          "modalId": "dogo-onsen",
          "transitInfo": "🚃 道後温泉駅からリムジンバス（空港直行）または市内電車（JR駅）へ"
        },
        {
          "time": "18:00",
          "title": "道後温泉駅から空港またはJR松山駅へ（帰路）",
          "spot": "松山空港 / JR松山駅",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Matsuyama_Airport_20240709_%2810%29.jpg/1280px-Matsuyama_Airport_20240709_%2810%29.jpg",
          "desc": "道後温泉駅から松山空港までは直行リムジンバスで約40分。空港でも最後の「蛇口みかんジュース」やみかんソフトを味わって帰路へ！",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山空港"
        }
      ],
      "hostTip": "伊予鉄市内電車1Dayチケット（800円）を購入すると、小銭要らずで乗り降り自由になり非常に快適です。道後温泉本館が混雑している場合は、歩いてすぐの別館「飛鳥乃湯泉」も広々としておすすめです！"
    },
    {
      "id": "1night-art-onsen",
      "duration": "1night",
      "durationBadge": "1泊2日（温泉ステイ）",
      "categoryBadge": "名城と文学・アート・名湯のんびり旅",
      "title": "名城と二之丸庭園・道後温泉・蜷川実花アート・鍋焼きうどん",
      "desc": "車がなくても公共交通機関で完全完結！初めての松山旅行や女子旅、カップル、シニアに最も選ばれている王道＆癒やしの1泊2日ステイ。",
      "transportType": "train",
      "transportLabel": "🚃 車不要・市内電車＋徒歩で完結",
      "targetLabel": "女子旅・カップル・シニア・文学アート好き",
      "costEst": "温泉旅館宿泊＋グルメ満喫",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=松山空港&waypoints=松山城%7C松山城二之丸史跡庭園%7C道後温泉本館%7C石手寺%7C鍋焼きうどん+アサヒ&travelmode=transit",
      "dayRoutes": [
        {
          "dayLabel": "Day 1：松山城と道後温泉ステイ",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=道後温泉本館&waypoints=松山城%7C松山城二之丸史跡庭園%7C道後温泉別館+飛鳥乃湯泉&travelmode=transit"
        },
        {
          "dayLabel": "Day 2：朝湯・石手寺・ご当地鍋焼きうどん",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=道後温泉本館&destination=松山空港&waypoints=石手寺%7C坂の上の雲ミュージアム%7C鍋焼きうどん+アサヒ&travelmode=transit"
        }
      ],
      "steps": [
        {
          "time": "Day 1 午後",
          "title": "松山城 ＆ 二之丸史跡庭園（恋人の聖地）",
          "spot": "松山城天守 ＆ 二之丸史跡庭園",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "松山城天守を見学後、城の麓の「二之丸史跡庭園」へ。発掘された藩邸の間取りを池や柑橘で立体再現した世界的にも稀有な史跡。日露戦争の愛の金貨が出土したロマンチックな散策路。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城二之丸史跡庭園",
          "modalId": "matsuyama-castle",
          "transitInfo": "🚃 市内電車で道後温泉へ移動（約15分）"
        },
        {
          "time": "Day 1 夕方〜夜",
          "title": "道後温泉チェックイン ＆ 浴衣で夜の温泉街散策",
          "spot": "道後温泉本館 ＆ 飛鳥乃湯泉中庭（蜷川実花アート）",
          "image": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🍺 道後麦酒館の道後ビール ＆ 熱々宇和島じゃこ天",
          "desc": "宿にチェックインして色浴衣に着替え。写真家・蜷川実花氏の極彩色フラワーアートで彩られた「飛鳥乃湯泉」中庭を鑑賞し、湯上がりに「道後麦酒館」で地ビールと炙りじゃこ天で乾杯！",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉別館+飛鳥乃湯泉",
          "modalId": "ninagawa-dogo"
        },
        {
          "time": "Day 2 朝",
          "title": "道後温泉本館の朝湯 ＆ 刻太鼓（ときだいこ）の音",
          "spot": "道後温泉本館",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
          "desc": "朝6時、本館最上層の「振鷺閣」から響き渡る刻太鼓の音とともにオープンする本館の朝風呂を堪能。澄んだ朝の空気と神聖なお湯で心身を目覚めさせます。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館",
          "modalId": "dogo-onsen",
          "transitInfo": "🚌 道後温泉駅からバスまたはタクシーで約5分"
        },
        {
          "time": "Day 2 午前",
          "title": "四国遍路の聖地・石手寺（国宝仁王門と洞窟回廊）",
          "spot": "第51番札所 熊野山 石手寺",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Isiteji20220325_1.jpg/1280px-Isiteji20220325_1.jpg",
          "gourmet": "🍡 名物「おやき（やきもち）」",
          "desc": "鎌倉時代の国宝仁王門をくぐり、ミステリアスな「マントラ洞窟回廊」を巡る日本屈指のパワースポット。1200年の四国遍路と「お接待」の温かい文化に触れる体験。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=石手寺",
          "modalId": "shikoku-henro-heritage",
          "transitInfo": "🚃 市内電車で大街道・銀天街へ移動"
        },
        {
          "time": "Day 2 昼",
          "title": "松山市民のソウルフード「鍋焼きうどん」ランチ",
          "spot": "鍋焼きうどん アサヒ または ことり",
          "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🍲 アルミ鍋の甘い出汁鍋焼きうどん ＆ いなり寿司",
          "desc": "銀天街の路地裏にある老舗で、熱々のアルミ鍋で提供される甘辛い出汁の「鍋焼きうどん」をすする！出汁の効いた優しい味は松山県民のふるさとの味そのものです。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=鍋焼きうどん+アサヒ"
        }
      ],
      "hostTip": "道後温泉本館は夜と朝で雰囲気がガラリと変わります。宿泊するなら夜の幻想的なライトアップと、朝6時の「刻太鼓（ときだいこ）」の音とともに浴びる朝湯の両方を体験するのが最高の贅沢です！"
    },
    {
      "id": "1night-sunset-drive",
      "duration": "1night",
      "durationBadge": "1泊2日（レンタカー）",
      "categoryBadge": "海沿い絶景＆夕日ドライブ（松山＋下灘＋砥部）",
      "title": "松山城・下灘駅の奇跡のサンセット・砥部焼の里うつわ巡り",
      "desc": "レンタカーで伊予灘の海岸線（夕やけこやけライン）を走り、「日本一海に近い駅」として知られる下灘駅の夕日を鑑賞。翌日は砥部焼の窯元巡りや絵付け体験を楽しむ絶景＆手仕事プラン。",
      "transportType": "car",
      "transportLabel": "🚗 レンタカー推奨（海岸線ドライブ）",
      "targetLabel": "写真好き・カップル・ドライブ・伝統工芸好き",
      "costEst": "レンタカー＋温泉旅館宿泊",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C下灘駅%7C道後温泉本館%7C砥部焼陶芸館&travelmode=driving",
      "steps": [
        {
          "time": "Day 1 昼",
          "title": "松山空港到着・レンタカーで松山城＆鯛めし",
          "spot": "松山市街（松山城・郷土料理五志喜）",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "gourmet": "🥢 松山鯛めし・五色そうめんランチ",
          "desc": "空港でレンタカーを借りて松山市内へ。松山城を見学し、老舗「五志喜」で伝統の鯛めしを味わったら、いざ海沿いのドライブへ出発！",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城",
          "transitInfo": "🚗 国道378号（夕やけこやけライン）を西へ約45分ドライブ"
        },
        {
          "time": "Day 1 夕暮れ",
          "title": "JR下灘駅で海と空が染まる奇跡の夕日を鑑賞",
          "spot": "JR下灘駅（日本一海に近い駅）",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
          "desc": "ホームの目の前に広がる伊予灘。映画やCMのロケ地となったノスタルジックな無人駅で、海へと沈む夕日と茜色のマジックアワーを堪能。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=下灘駅",
          "modalId": "shimonada-station",
          "transitInfo": "🚗 道後温泉へ車で約50分"
        },
        {
          "time": "Day 2 午前",
          "title": "240年の伝統「砥部焼（とべやき）」の里を巡る",
          "spot": "砥部町（砥部焼陶芸館・窯元通り）",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
          "desc": "松山市街から車で南へ約30分。パリやNYでも称賛される白磁の伝統工芸「砥部焼」の窯元を巡り、モダンでおしゃれなうつわ探しや絵付け体験。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=砥部焼陶芸館",
          "modalId": "tobeyaki-craft",
          "transitInfo": "🚗 松山空港へ車で約35分"
        }
      ],
      "hostTip": "下灘駅の夕日を狙うなら、日の入りの約45分前には到着しておくのがベストです。夕やけこやけライン（国道378号）は海沿いギリギリを走る爽快なドライブルートです。"
    },
    {
      "id": "2nights-shimanami",
      "duration": "2nights",
      "durationBadge": "2泊3日（しまなみ絶景）",
      "categoryBadge": "しまなみ海道＆瀬戸内海絶景コース",
      "title": "王道松山 ＋ 今治城・亀老山展望公園・しまなみ海道・下灘駅",
      "desc": "「松山だけだと見るものがない」を完全に覆す！世界中の旅人が憧れるしまなみ海道の多島美、隈研吾氏設計の亀老山展望公園、今治の焼豚玉子飯、そして夕暮れの下灘駅まで愛媛のハイライトを凝縮した大満足コース。",
      "transportType": "car",
      "transportLabel": "🚗 レンタカー推奨（総走行距離 約140km）",
      "targetLabel": "絶景好き・アクティブ派・瀬戸内海を満喫したい方",
      "costEst": "2泊3日レンタカー周遊",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C道後温泉本館%7C今治城%7C亀老山展望公園%7C下灘駅&travelmode=driving",
      "dayRoutes": [
        {
          "dayLabel": "Day 1：松山空港 → 松山城 → 道後温泉泊",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=道後温泉本館&waypoints=松山城%7C萬翠荘&travelmode=driving"
        },
        {
          "dayLabel": "Day 2：今治城 → しまなみ海道 → 亀老山展望公園",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=道後温泉本館&destination=道後温泉本館&waypoints=今治城%7C来島海峡展望館%7C亀老山展望公園%7Cタオル美術館&travelmode=driving"
        },
        {
          "dayLabel": "Day 3：下灘駅海岸線ドライブ → 松山空港",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=道後温泉本館&destination=松山空港&waypoints=下灘駅&travelmode=driving"
        }
      ],
      "steps": [
        {
          "time": "Day 1",
          "title": "松山市内観光＆道後温泉ステイ",
          "spot": "松山城・萬翠荘・道後温泉本館",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
          "desc": "初日は松山中心部の名城と名湯を満喫。道後温泉に宿泊して翌日のしまなみドライブに備えます。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館"
        },
        {
          "time": "Day 2 午前",
          "title": "今治へドライブ ＆ 海水の海城「今治城」見学",
          "spot": "今治城（日本屈指の海城）",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Imabari_Castle_01.JPG",
          "gourmet": "🍳 今治B級グルメ「焼豚玉子飯」ランチ",
          "desc": "松山から車で約50分。海水を引き込んだ広大な堀が珍しい今治城を見学。昼食は甘辛ダレと半熟目玉焼きがたまらない今治ソウルフード「焼豚玉子飯」！",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=今治城",
          "transitInfo": "🚗 来島海峡大橋を渡り、大島へ（約20分）"
        },
        {
          "time": "Day 2 午後",
          "title": "しまなみ海道・亀老山（きろうさん）展望公園の圧倒的絶景",
          "spot": "亀老山展望公園（隈研吾設計）",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
          "desc": "隈研吾氏設計の「見えない展望台」。眼下に来島海峡大橋と激流、エメラルドグリーンの多島美が広がる、日本の展望スポット第2位の絶景。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=亀老山展望公園",
          "modalId": "kirosan-view"
        },
        {
          "time": "Day 3",
          "title": "海沿い下灘駅ドライブ ＆ 北条鯛釜飯を食べて帰路へ",
          "spot": "JR下灘駅 ＆ 松山北条鯛めし",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
          "gourmet": "🐟 1700年の伝統「北条鯛釜飯（炊き込み）」",
          "desc": "海沿いの国道378号を爽快にドライブし、下灘駅の景色を堪能。最後は素焼き真鯛の旨味が染み込んだ伝統の鯛釜飯を味わって空港へ。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=下灘駅"
        }
      ],
      "hostTip": "亀老山展望公園は隈研吾氏設計の「見えない展望台」です。夕方の来島海峡大橋ライトアップの時間帯も素晴らしいですが、昼間の潮流の渦と碧い海のコントラストも圧巻です。"
    },
    {
      "id": "2nights-little-kyoto",
      "duration": "2nights",
      "durationBadge": "2泊3日（レトロ名建築）",
      "categoryBadge": "伊予の小京都と手仕事・名建築コース",
      "title": "道後温泉 ＋ 内子座・八日市町並み・大洲臥龍山荘・砥部焼",
      "desc": "大人の落ち着いた知的な旅。白壁と木蝋で栄えた内子の重要伝統的建造物群保存地区、大正の木造芝居小屋「内子座」、ミシュラン一ツ星の数寄屋山荘「臥龍山荘」、大洲城、そして砥部焼の窯元を巡る至高の歴史文化ルート。",
      "transportType": "car",
      "transportLabel": "🚗 レンタカー推奨（またはJR特急宇和海）",
      "targetLabel": "歴史建築好き・大人の贅沢旅・文化体験",
      "costEst": "2泊3日ゆったり周遊",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C道後温泉本館%7C内子座%7C臥龍山荘%7C砥部焼陶芸館&travelmode=driving",
      "steps": [
        {
          "time": "Day 1",
          "title": "松山城 ＆ 道後温泉名湯ステイ",
          "spot": "松山城 ＆ 道後温泉本館",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "初日は松山市内の歴史を味わい、夜は道後温泉の旅館で瀬戸内の海の幸を堪能。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館"
        },
        {
          "time": "Day 2 午前",
          "title": "内子（うちこ）：白壁の町並み ＆ 木造芝居小屋「内子座」",
          "spot": "八日市・護芳の町並み（重伝建）＆ 内子座",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Uchiko-za_ac_%281%29.jpg/1280px-Uchiko-za_ac_%281%29.jpg",
          "desc": "木蝋（もくろう）で栄えた豪商の白壁土蔵が続く町並みを散策。大正5年築の現役本格木造芝居小屋「内子座」では回り舞台や奈落を見学できます。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=内子座",
          "modalId": "governor-kabuki",
          "transitInfo": "🚗 大洲市へ車で約20分"
        },
        {
          "time": "Day 2 午後",
          "title": "大洲（おおず）：清流・肱川の数寄屋建築「臥龍山荘」＆大洲城",
          "spot": "臥龍山荘（ミシュラン一ツ星）＆ 大洲城",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/96/%E8%87%A5%E9%BE%8D%E5%B1%B1%E8%8D%98_-_garyuu_sanso_-_panoramio.jpg",
          "desc": "「伊予の小京都」大洲へ。清流の崖の上に建つ「臥龍山荘」は日本建築の粋を集めた至宝。木造復元された大洲城天守の雄姿も見どころ。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=臥龍山荘"
        },
        {
          "time": "Day 3",
          "title": "砥部焼の里うつわ巡り ＆ 伝統鯛めしランチ",
          "spot": "砥部町 ＆ 松山市内",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
          "gourmet": "🐟 北条鯛めし ＆ 銘菓「母恵夢（ポエム）」",
          "desc": "お気に入りの砥部焼を探し、最後は素朴な香ばしさが絶品の鯛釜飯を食べて空港へ。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=砥部焼陶芸館"
        }
      ],
      "hostTip": "大洲の「臥龍山荘」は『ミシュラン・グリーンガイド・ジャポン』で一ツ星を獲得した名建築。清流を望む崖の上に建てられた不老庵からの眺めは息をのむ美しさです。"
    },
    {
      "id": "extra-adventure",
      "duration": "extra",
      "durationBadge": "3泊以上＋α（四国深層）",
      "categoryBadge": "大自然・アクティビティ深層コース",
      "title": "霊峰・石鎚山 ＆ 瓶ヶ森 UFOライン天空ドライブ / しまなみサイクリング縦断",
      "desc": "「3泊するほど見るものがないかも（笑）」という常識を吹き飛ばす！自動車CMで世界が驚愕した標高1,700mの稜線ロード「UFOライン」、西日本最高峰・石鎚山（1,982m）、世界のサイクリストの聖地・しまなみ縦断など、一生忘れられない四国の大自然へ。",
      "transportType": "car",
      "transportLabel": "🚗 ドライブ ＆ 🚲 レンタルE-bike",
      "targetLabel": "大自然・登山・絶景ドライブ・ロングサイクリング",
      "costEst": "本格アクティビティ旅行",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山市駅&destination=松山空港&waypoints=石鎚登山ロープウェイ%7C瓶ヶ森%7CUFOライン&travelmode=driving",
      "steps": [
        {
          "time": "アドベンチャー ①",
          "title": "西日本最高峰・石鎚山（1,982m）登山＆山岳信仰",
          "spot": "霊峰・石鎚山（日本七霊山）",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Isidutisan20220226_1.jpg/1280px-Isidutisan20220226_1.jpg",
          "desc": "ロープウェイを利用して標高1,300mへ。鎖場を登り詰めた天狗岳の鋭峰、山岳信仰の神秘と紅葉の圧倒的大パノラマ（往復登山約5〜6時間）。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=石鎚登山ロープウェイ",
          "modalId": "ishizuchisan"
        },
        {
          "time": "アドベンチャー ②",
          "title": "瓶ヶ森（かめがもり）と「UFOライン」天空ドライブ",
          "spot": "町道瓶ヶ森線（UFOライン / 標高1,700m）",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Mt.Kamegamori2.jpg/1280px-Mt.Kamegamori2.jpg",
          "desc": "四国山地の稜線を走る国内屈指の天空ロード。大手自動車CMの舞台となった笹原の絶景「氷見二千石原」を抜ける雲の上のドライブ体験。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=瓶ヶ森+UFOライン",
          "modalId": "kamegamori-ufoline"
        },
        {
          "time": "アドベンチャー ③",
          "title": "しまなみ海道 サイクリング縦断（今治〜尾道 70km）",
          "spot": "しまなみ海道サイクリングロード",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
          "desc": "世界中のサイクリストが憧れるCNN選定の世界7大サイクリングコース。E-bike（電動アシスト）なら初心者でも爽快に島々を渡れます。",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=サンライズ糸山",
          "modalId": "shimanami-cycling-guide"
        }
      ],
      "hostTip": "UFOラインは例年11月末〜4月中旬まで冬季通行止めとなるため、5月〜10月の新緑・夏空・紅葉シーズンがベストです！"
    }
  ],
  "tips": [
    {
      "icon": "🐟",
      "title": "鯛めし2大流派の選び方",
      "desc": "観光客に一番人気は刺身に生卵と出汁を合わせる「宇和島鯛めし」。一方、地元民のソウルフードは土鍋で丸ごと炊き込む1700年伝統の「松山・北条鯛めし」。老舗「五志喜」等では贅沢な食べ比べセットもあります！"
    },
    {
      "icon": "♨️",
      "title": "道後温泉本館の攻略法",
      "desc": "2024年7月に全館営業再開！混雑時は整理券が配布されるため、到着時にまず待ち時間を確認しましょう。朝6時の「刻太鼓」とともにオープンする朝風呂は比較的スムーズで最高に清々しい体験です。"
    },
    {
      "icon": "🍊",
      "title": "蛇口みかんジュースの場所",
      "desc": "松山空港（1階）、道後温泉観光案内所、ロープウェイ街「10 FACTORY」や「えひめ愛顔の観光物産館」に設置されています。3種飲み比べができる店舗もあり、旅の記念に必見です！"
    },
    {
      "icon": "🎁",
      "title": "地元民熱愛の真の土産「母恵夢（ポエム）」",
      "desc": "タルトや坊っちゃん団子も定番ですが、愛媛県民が一番愛しているのがバターと卵黄を練り込んだ「母恵夢」。冬場（11月〜1月）ならゼリーのような奇跡の高級柑橘「紅まどんな」が至高のお土産です。"
    }
  ]
},
  en: {
  "sectionBadge": "Curated Travel Routes",
  "sectionTitle": "Matsuyama & Ehime Model Itineraries",
  "sectionSubtitle": "Day Trip, 1-Night, 2-Nights & 3+ Nights with Google Maps Directions",
  "sectionDesc": "Think there's not enough to see for 3 nights? While Matsuyama's historic downtown is wonderfully walkable in a single day, venturing slightly further unveils world-class island bridges, sky-high mountain roads, and samurai merchant quarters that can fill an unforgettable week. Pick the perfect route complete with interactive Google Maps GPS navigation!",
  "filters": [
    {
      "id": "all",
      "label": "Show All"
    },
    {
      "id": "daytrip",
      "label": "⏱️ Day Trip (5–7h)"
    },
    {
      "id": "1night",
      "label": "🏨 1 Night / 2 Days"
    },
    {
      "id": "2nights",
      "label": "🌅 2 Nights / 3 Days"
    },
    {
      "id": "extra",
      "label": "⛰️ 3+ Nights Extra"
    }
  ],
  "courses": [
    {
      "id": "daytrip-classic",
      "duration": "daytrip",
      "durationBadge": "Day Trip (5–7 Hours)",
      "categoryBadge": "Classic Highlights",
      "title": "Matsuyama Castle, Taimeshi, Bansuiso & Dogo Onsen (No Car Needed)",
      "desc": "The ultimate one-day tour condensing Matsuyama's castle, cuisine, and 3,000-year hot springs into an effortless streetcar itinerary.",
      "transportType": "train",
      "transportLabel": "🚃 Streetcar Only (1-Day Pass Recommended)",
      "targetLabel": "First-time visitors & business stopovers",
      "costEst": "Approx. ¥4,000–¥6,000 (Lunch, castle & bath ticket)",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=道後温泉本館&waypoints=松山城ロープウェイのりば%7C松山城天守%7C萬翠荘%7C坂の上の雲ミュージアム&travelmode=transit",
      "steps": [
        {
          "time": "11:00",
          "title": "Arrival at JR Matsuyama Station / Airport",
          "spot": "Streetcar to Okaido",
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/BotchanTrainNo.1.jpg",
          "desc": "Hop on the nostalgic Iyotetsu streetcar toward Okaido. Store luggage in lockers and begin your adventure.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=大街道駅",
          "transitInfo": "🚃 12 mins via Iyotetsu Streetcar"
        },
        {
          "time": "11:30",
          "title": "Uwajima Taimeshi Lunch & Tap Citrus Juice",
          "spot": "Ropeway Shopping Street",
          "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🥢 Uwajima Taimeshi (Raw Sea Bream with Egg) & 🍊 Juice from the Tap",
          "desc": "Feast on freshly sliced sea bream sashimi over steaming rice with raw egg and savory dashi sauce. Try citrus tasting at 10 FACTORY.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城ロープウェイ街",
          "transitInfo": "🚶 3 mins walk to Castle Ropeway"
        },
        {
          "time": "13:00",
          "title": "Matsuyama Castle Keep Exploration",
          "spot": "Matsuyama Castle (Original 12 Keep)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "Ascend via the scenic chairlift to explore one of Japan's twelve original castle towers, enjoying sweeping vistas of the Seto Inland Sea.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城天守",
          "modalId": "matsuyama-castle",
          "transitInfo": "🚶 Descend chairlift, 5 mins walk"
        },
        {
          "time": "15:00",
          "title": "Bansuiso Villa & Tadao Ando Museum",
          "spot": "French Chateau Bansuiso & Saka no Ue no Kumo Museum",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bansui-so_2016-04-30.jpg/1280px-Bansui-so_2016-04-30.jpg",
          "desc": "Admire the 1922 French Neo-Renaissance palace Bansuiso and Tadao Ando's cantilevered modern architectural triangle.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=萬翠荘",
          "modalId": "bansuiso",
          "transitInfo": "🚃 10 mins streetcar to Dogo Onsen"
        },
        {
          "time": "16:00",
          "title": "Dogo Onsen Honkan & Haikara Street",
          "spot": "Dogo Onsen Main Bathhouse",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
          "gourmet": "🍡 Botchan Dango & 🍊 Poème sweet cakes",
          "desc": "Bathe in Japan's oldest 3,000-year hot spring, fully restored in 2024. Stroll the vibrant arcade for local crafts and foot baths.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館",
          "modalId": "dogo-onsen",
          "transitInfo": "🚌 Direct limousine bus to airport or streetcar to JR"
        },
        {
          "time": "18:00",
          "title": "Departure from Dogo to Airport or Station",
          "spot": "Matsuyama Airport / JR Station",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Matsuyama_Airport_20240709_%2810%29.jpg/1280px-Matsuyama_Airport_20240709_%2810%29.jpg",
          "desc": "Take the limousine bus directly to the airport (40 mins), sample your final mikan gelato, and head home refreshed!",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山空港"
        }
      ],
      "hostTip": "Get the Iyotetsu 1-Day Streetcar Pass (¥800) for unlimited rides without needing change. If the main bath has a waitlist, the nearby Asuka-no-Yu annex is equally stunning!"
    },
    {
      "id": "1night-art-onsen",
      "duration": "1night",
      "durationBadge": "1 Night / 2 Days",
      "categoryBadge": "Castles, Modern Art & Onsen Retreat",
      "title": "Matsuyama Castle, Dogo Onsen, Mika Ninagawa Art & Nabeyaki Udon",
      "desc": "Completely car-free! The most popular 1-night relaxing escape for couples, friends, and culture enthusiasts.",
      "transportType": "train",
      "transportLabel": "🚃 Streetcars & Walking (No Car Needed)",
      "targetLabel": "Couples, culture lovers, relaxing getaway",
      "costEst": "Onsen ryokan stay + local delicacies",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=松山空港&waypoints=松山城%7C松山城二之丸史跡庭園%7C道後温泉本館%7C石手寺%7C鍋焼きうどん+アサヒ&travelmode=transit",
      "dayRoutes": [
        {
          "dayLabel": "Day 1: Castle & Dogo Onsen Evening",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山駅&destination=道後温泉本館&waypoints=松山城%7C松山城二之丸史跡庭園%7C道後温泉別館+飛鳥乃湯泉&travelmode=transit"
        },
        {
          "dayLabel": "Day 2: Morning Bath, Ishite-ji Temple & Udon",
          "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=道後温泉本館&destination=松山空港&waypoints=石手寺%7C坂の上の雲ミュージアム%7C鍋焼きうどん+アサヒ&travelmode=transit"
        }
      ],
      "steps": [
        {
          "time": "Day 1 Afternoon",
          "title": "Matsuyama Castle & Ninomaru Garden",
          "spot": "Ninomaru Historical Garden (Lovers' Sanctuary)",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "Tour the castle keep and explore the serene Ninomaru Garden where ancient samurai residence floorplans are brought to life in running water.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=松山城二之丸史跡庭園",
          "modalId": "matsuyama-castle",
          "transitInfo": "🚃 15 mins streetcar to Dogo Onsen"
        },
        {
          "time": "Day 1 Evening",
          "title": "Yukata Night Stroll & Mika Ninagawa Floral Courtyard",
          "spot": "Dogo Onsen & Asuka-no-Yu Art Installation",
          "image": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🍺 Dogo Craft Beer & Fried Jakoten fish patties",
          "desc": "Slip into yukata robes for an evening stroll. Marvel at photographer Mika Ninagawa's vivid floral art installation, then toast with local craft beer.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉別館+飛鳥乃湯泉",
          "modalId": "ninagawa-dogo"
        },
        {
          "time": "Day 2 Morning",
          "title": "Sacred Morning Bath & Ishite-ji Temple Cave",
          "spot": "Ishite-ji Temple (National Treasure Gate)",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Isiteji20220325_1.jpg/1280px-Isiteji20220325_1.jpg",
          "desc": "Hear the 6:00 AM sacred drum chime at Dogo Onsen, then visit Temple #51 Ishite-ji with its Kamakura-era gate and mystical underground mantra cave.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=石手寺",
          "modalId": "shikoku-henro-heritage",
          "transitInfo": "🚃 Streetcar to Gintengai shopping arcade"
        },
        {
          "time": "Day 2 Lunch",
          "title": "Local Soul Food: Aluminum Pot Nabeyaki Udon",
          "spot": "Nabeyaki Udon Asahi / Kotori",
          "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
          "gourmet": "🍲 Sweet dashi nabeyaki udon in classic aluminum pots",
          "desc": "Tuck into steaming noodles cooked in retro aluminum pots with tender sweet dashi broth—the authentic comfort food of Matsuyama natives.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=鍋焼きうどん+アサヒ"
        }
      ],
      "hostTip": "Dogo Onsen has two distinct personalities: illuminated nighttime mystique and the pure dawn awakening at 6:00 AM with the sacred Tokidaiko drums!"
    },
    {
      "id": "1night-sunset-drive",
      "duration": "1night",
      "durationBadge": "1 Night / 2 Days (Rental Car)",
      "categoryBadge": "Coastline Sunset & Ceramic Heritage",
      "title": "Matsuyama Castle, Shimonada Sunset & Tobe Ware Pottery",
      "desc": "Drive the scenic Route 378 along the Iyo Sea to Japan's most scenic seaside train station, followed by ceramic studio tours in Tobe.",
      "transportType": "car",
      "transportLabel": "🚗 Rental Car Recommended",
      "targetLabel": "Photographers, road-trippers, couples",
      "costEst": "Rental car + ryokan stay",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C下灘駅%7C道後温泉本館%7C砥部焼陶芸館&travelmode=driving",
      "steps": [
        {
          "time": "Day 1 Afternoon",
          "title": "Castle Visit & Sunset Drive to Shimonada Station",
          "spot": "JR Shimonada Station (Closest Station to the Sea)",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
          "desc": "Pick up a rental car, tour Matsuyama Castle, and cruise along the picturesque sunset coast to JR Shimonada Station for golden hour.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=下灘駅",
          "modalId": "shimonada-station",
          "transitInfo": "🚗 50 mins drive to Dogo Onsen"
        },
        {
          "time": "Day 2 Morning",
          "title": "Tobe Porcelain Village & Artisan Workshops",
          "spot": "Tobe Town (Tobe Ceramic Hall)",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
          "desc": "Explore 240 years of indigo-on-white porcelain craft celebrated in Paris and NY. Browse designer tablewares and paint your own ceramic souvenir.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=砥部焼陶芸館",
          "modalId": "tobeyaki-craft"
        }
      ],
      "hostTip": "Arrive at Shimonada Station 45 minutes before sunset to secure parking and experience the twilight color gradient over the sea!"
    },
    {
      "id": "2nights-shimanami",
      "duration": "2nights",
      "durationBadge": "2 Nights / 3 Days",
      "categoryBadge": "Shimanami Kaido & Island Panoramas",
      "title": "Matsuyama Highlights, Imabari Castle & Mt. Kiro Island Vista",
      "desc": "Shattering the myth that Matsuyama runs out of sights! Cross world-famous suspension bridges, feast on Imabari yakibuta rice, and gaze from Kengo Kuma's hidden observatory.",
      "transportType": "car",
      "transportLabel": "🚗 Rental Car (Approx. 140 km total)",
      "targetLabel": "Scenic travelers, active explorers, ocean lovers",
      "costEst": "3-day rental car island road trip",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C道後温泉本館%7C今治城%7C亀老山展望公園%7C下灘駅&travelmode=driving",
      "steps": [
        {
          "time": "Day 1",
          "title": "Matsuyama Castle & Dogo Onsen Stay",
          "spot": "Matsuyama Downtown & Dogo Onsen",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg",
          "desc": "Experience classic Matsuyama sights and recharge with a thermal bath before tomorrow's island drive.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館"
        },
        {
          "time": "Day 2",
          "title": "Imabari Castle & Mt. Kiro Kengo Kuma Observatory",
          "spot": "Mt. Kiro Observatory Park on Oshima Island",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
          "gourmet": "🍳 Imabari Yakibuta Tamago Meshi (Pork & Egg Rice)",
          "desc": "Visit Imabari Castle with its seawater moat, cross Kurushima Kaikyo Bridge to Oshima, and stand atop Kengo Kuma's subterranean observatory.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=亀老山展望公園",
          "modalId": "kirosan-view"
        },
        {
          "time": "Day 3",
          "title": "Shimonada Coastline Drive & Traditional Taimeshi",
          "spot": "Shimonada Station & Hojo Steamed Taimeshi",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Shimonada_Station_201507%281%29.JPG/1280px-Shimonada_Station_201507%281%29.JPG",
          "desc": "Cruise the sparkling coast, savor traditional 1,700-year whole sea bream steamed rice in clay pots, and arrive at the airport.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=下灘駅"
        }
      ],
      "hostTip": "Mt. Kiro Observatory by Kengo Kuma is ranked Japan's #2 scenic viewpoint. Both daytime swirling tides and sunset bridge illuminations are breathtaking!"
    },
    {
      "id": "2nights-little-kyoto",
      "duration": "2nights",
      "durationBadge": "2 Nights / 3 Days",
      "categoryBadge": "Samurai Quarters, Theater & Heritage",
      "title": "Dogo Onsen, Historic Uchiko Town, Ozu Garyu Sanso & Tobe",
      "desc": "Sophisticated heritage route through white-walled wax merchant quarters, the historic 1916 Uchiko-za Kabuki playhouse, and Michelin-starred Garyu Sanso villa.",
      "transportType": "car",
      "transportLabel": "🚗 Rental Car or JR Limited Express",
      "targetLabel": "Architecture enthusiasts, culture & history lovers",
      "costEst": "Relaxed cultural discovery",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山空港&destination=松山空港&waypoints=松山城%7C道後温泉本館%7C内子座%7C臥龍山荘%7C砥部焼陶芸館&travelmode=driving",
      "steps": [
        {
          "time": "Day 1",
          "title": "Matsuyama Castle & Dogo Onsen Art Exploration",
          "spot": "Matsuyama Castle & Dogo",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg",
          "desc": "Discover samurai heritage and sleep peacefully in an onsen ryokan.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=道後温泉本館"
        },
        {
          "time": "Day 2",
          "title": "Historic Uchiko-za Playhouse & Ozu Garyu Sanso Villa",
          "spot": "Uchiko Old Town & Garyu Sanso in Ozu",
          "image": "https://upload.wikimedia.org/wikipedia/commons/9/96/%E8%87%A5%E9%BE%8D%E5%B1%B1%E8%8D%98_-_garyuu_sanso_-_panoramio.jpg",
          "desc": "Step back into the Meiji era in Uchiko's white-walled preservation district and tour the authentic Kabuki playhouse. Continue to Ozu to visit Garyu Sanso teahouse perched over clear river rapids.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=臥龍山荘"
        },
        {
          "time": "Day 3",
          "title": "Tobe Ware Kilns & Farewell Sea Bream Feast",
          "spot": "Tobe Ceramics & Matsuyama",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg/1280px-Aichi_Prefectural_Ceramic_Museum_%2856%29.jpg",
          "desc": "Hunt for bespoke ceramic tableware in Tobe studios before catching your flight.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=砥部焼陶芸館"
        }
      ],
      "hostTip": "Garyu Sanso in Ozu holds a Michelin Green Guide 1-Star rating. The Furo-an teahouse hovering over the river gorge is a masterpiece of Japanese tea culture."
    },
    {
      "id": "extra-adventure",
      "duration": "extra",
      "durationBadge": "3+ Nights Extra",
      "categoryBadge": "Deep Shikoku Adventure & Sky High Ridges",
      "title": "Mt. Ishizuchi Peak, Sky-High UFO Line & Shimanami Cycling Traversal",
      "desc": "Think there's nothing to do for 3+ nights? Discover Western Japan's highest sacred peak (1,982m), the viral 1,700m UFO Line ridge road from car commercials, and 70km of world-class cycling across the sea.",
      "transportType": "car",
      "transportLabel": "🚗 Driving & 🚲 E-bike Rental",
      "targetLabel": "High-altitude hiking, sky roads & long-distance cycling",
      "costEst": "Full adventure expedition",
      "mapUrl": "https://www.google.com/maps/dir/?api=1&origin=松山市駅&destination=松山空港&waypoints=石鎚登山ロープウェイ%7C瓶ヶ森%7CUFOライン&travelmode=driving",
      "steps": [
        {
          "time": "Adventure 1",
          "title": "Mt. Ishizuchi Peak (1,982m) Sacred Alpine Ascent",
          "spot": "Mt. Ishizuchi (Highest Peak in Western Japan)",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Isidutisan20220226_1.jpg/1280px-Isidutisan20220226_1.jpg",
          "desc": "Take the ropeway up to 1,300m and hike to the dramatic Tengu-dake blade ridge, revered for over a millennium as one of Japan's seven sacred mountains.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=石鎚登山ロープウェイ",
          "modalId": "ishizuchisan"
        },
        {
          "time": "Adventure 2",
          "title": "The Sky-High UFO Line (Kamegamori Mountain Ridge Road)",
          "spot": "UFO Line Ridge Highway (Elevation 1,700m)",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Mt.Kamegamori2.jpg/1280px-Mt.Kamegamori2.jpg",
          "desc": "Drive through the clouds along the sweeping bamboo grass ridges that shocked viewers in national car commercials. Unsurpassed alpine majesty.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=瓶ヶ森+UFOライン",
          "modalId": "kamegamori-ufoline"
        },
        {
          "time": "Adventure 3",
          "title": "Shimanami Kaido Cycling Crossing (Imabari to Onomichi 70km)",
          "spot": "Shimanami Kaido Cycling Highway",
          "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Kurushimakaikyou_ohashi01.jpg/1280px-Kurushimakaikyou_ohashi01.jpg",
          "desc": "Traverse the islands on designated elevated cycling lanes suspended over ocean currents. Rental E-bikes make the 70km route accessible even to casual riders.",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=サンライズ糸山",
          "modalId": "shimanami-cycling-guide"
        }
      ],
      "hostTip": "The UFO Line is closed during winter from late November to mid-April. Visit between May and October for fresh green pastures, crystal summer skies, or blazing autumn foliage!"
    }
  ],
  "tips": [
    {
      "icon": "🐟",
      "title": "Two Distinct Taimeshi Styles",
      "desc": "Uwajima style serves raw sea bream sashimi with raw egg in seasoned dashi. Matsuyama/Hojo style steams the whole fish in rice clay pots for savory charred crusts. Try both at historic restaurants like Goshiki!"
    },
    {
      "icon": "♨️",
      "title": "Dogo Onsen Bathhouse Tips",
      "desc": "Fully restored in July 2024! To avoid lines, check wait times upon arrival or enjoy the early 6:00 AM morning bath when the sacred Tokidaiko drum sounds."
    },
    {
      "icon": "🍊",
      "title": "Juice from the Tap Locations",
      "desc": "Found at Matsuyama Airport (1F), Dogo Onsen Information Center, and 10 FACTORY on Ropeway Street. Sample tasting flights of three different citrus varieties!"
    },
    {
      "icon": "🎁",
      "title": "Ehime's True Soul Sweet: Poème",
      "desc": "While tarts are famous, locals love Poème cakes filled with buttery egg yolk white-bean paste. In winter (Nov–Jan), sweet jelly-like 'Beni Madonna' oranges are the ultimate luxury gift."
    }
  ]
}
};

let currentItineraryFilter = 'all';

function setItineraryFilter(filterId) {
  currentItineraryFilter = filterId;
  const sectionContainer = document.getElementById('active-section-container');
  if (sectionContainer && currentTab === 'itineraries') {
    sectionContainer.innerHTML = renderItinerariesSection();
  }
}

function renderItinerariesSection() {
  const data = itinerariesData[currentLang];
  const isJa = currentLang === 'ja';

  const filteredCourses = currentItineraryFilter === 'all'
    ? data.courses
    : data.courses.filter(c => c.duration === currentItineraryFilter);

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Section Hero Header -->
      <div class="text-center max-w-4xl mx-auto mb-10">
        <span class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200 shadow-sm">
          <span>📍</span>
          <span>${data.sectionBadge}</span>
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif-jp mb-4 leading-tight">
          ${data.sectionTitle}
        </h2>
        <p class="text-lg sm:text-xl font-bold text-gradient-citrus font-serif-jp mb-4">
          ${data.sectionSubtitle}
        </p>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          ${data.sectionDesc}
        </p>
      </div>

      <!-- Filter Buttons Bar -->
      <div class="flex overflow-x-auto pb-4 gap-2.5 justify-start sm:justify-center mb-12 scrollbar-none">
        ${data.filters.map(f => `
          <button onclick="setItineraryFilter('${f.id}')"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm flex-shrink-0 ${
              currentItineraryFilter === f.id
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-400 ring-offset-2'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-600'
            }">
            ${f.label}
          </button>
        `).join('')}
      </div>

      <!-- Course Cards Container -->
      <div class="space-y-12">
        ${filteredCourses.map((c, idx) => `
          <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all hover:border-orange-300">
            <!-- Card Header Bar -->
            <div class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="bg-orange-500 text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                  ${c.durationBadge}
                </span>
                <span class="bg-slate-700/80 text-orange-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-600">
                  ${c.categoryBadge}
                </span>
                <span class="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">
                  ${c.transportLabel}
                </span>
                <span class="bg-emerald-950/70 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/50">
                  🎯 ${c.targetLabel}
                </span>
              </div>

              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-4">
                <div class="max-w-3xl">
                  <h3 class="text-2xl sm:text-3xl font-extrabold font-serif-jp text-white mb-2 leading-snug">
                    ${c.title}
                  </h3>
                  <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    ${c.desc}
                  </p>
                </div>

                <!-- Google Maps Main Action Button -->
                <div class="flex-shrink-0 flex flex-col gap-2">
                  <a href="${c.mapUrl}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span>${isJa ? 'Google Maps で全ルートを開く' : 'Open Complete Route in Google Maps'}</span>
                    <svg class="w-4 h-4 ml-1 stroke-current" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>

                  <!-- Sub Day Routes if available -->
                  ${c.dayRoutes ? `
                    <div class="flex flex-wrap gap-2 pt-1">
                      ${c.dayRoutes.map(dr => `
                        <a href="${dr.mapUrl}" target="_blank" rel="noopener noreferrer"
                          class="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-700 inline-flex items-center space-x-1.5 transition">
                          <span>📍 ${dr.dayLabel}</span>
                          <span class="text-slate-400">↗</span>
                        </a>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            </div>

            <!-- Steps Timeline Section -->
            <div class="p-6 sm:p-10 bg-slate-50/50">
              <h4 class="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">
                ${isJa ? '🗓️ モデルコース タイムライン ＆ スポット詳細' : '🗓️ Itinerary Schedule & Highlights'}
              </h4>

              <div class="relative pl-6 sm:pl-8 border-l-2 border-orange-200 space-y-8 sm:space-y-10 ml-2 sm:ml-4">
                ${c.steps.map((s, sIdx) => `
                  <div class="relative group">
                    <!-- Dot Marker -->
                    <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow"></div>

                    <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                      <div class="flex flex-col md:flex-row gap-6">
                        <!-- Spot Photo -->
                        <div class="w-full md:w-56 h-40 sm:h-44 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 relative shadow-inner">
                          <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
                          <span class="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                            ${s.time}
                          </span>
                        </div>

                        <!-- Spot Content -->
                        <div class="flex-1 flex flex-col justify-between">
                          <div>
                            <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                              <h5 class="text-base sm:text-lg font-bold text-slate-900 font-serif-jp">
                                ${s.title}
                              </h5>
                              <span class="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                ${s.spot}
                              </span>
                            </div>

                            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                              ${s.desc}
                            </p>

                            ${s.gourmet ? `
                              <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3">
                                <span>${s.gourmet}</span>
                              </div>
                            ` : ''}
                          </div>

                          <!-- Action Links & Transit Info -->
                          <div class="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div class="flex items-center space-x-3">
                              <a href="${s.mapLink}" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center space-x-1 text-emerald-700 font-bold hover:text-emerald-800 hover:underline">
                                <span>📍 ${isJa ? 'Google Map で場所を確認' : 'View on Google Maps'}</span>
                                <span class="text-[10px]">↗</span>
                              </a>

                              ${s.modalId ? `
                                <button onclick="openModal('${s.modalId}')" class="inline-flex items-center space-x-1 text-orange-600 font-bold hover:text-orange-700 hover:underline">
                                  <span>📖 ${isJa ? '歴史ストーリーを開く' : 'Read Deep Story'}</span>
                                </button>
                              ` : ''}
                            </div>

                            ${s.transitInfo ? `
                              <span class="text-slate-500 font-medium text-[11px] bg-slate-100 px-2.5 py-1 rounded-md">
                                ${s.transitInfo}
                              </span>
                            ` : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Host Tips Box -->
              <div class="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border border-orange-200 shadow-sm flex items-start space-x-3.5">
                <span class="text-2xl flex-shrink-0">💡</span>
                <div>
                  <h6 class="text-xs font-bold uppercase tracking-wider text-orange-800 mb-1">
                    ${isJa ? '地元ホストからのワンポイントアドバイス' : 'Local Host Insider Advice'}
                  </h6>
                  <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    ${c.hostTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Special Highlight Banner: Why 3+ Nights is actually epic -->
      <div class="mt-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <span class="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-orange-400/30 mb-4">
            ${isJa ? '常識を覆す！愛媛・四国深層アクティビティ' : 'Shattering the 3-Night Myth'}
          </span>
          <h3 class="text-2xl sm:text-4xl font-extrabold font-serif-jp text-white mb-4">
            ${isJa ? '「松山って3泊するほど見るものがない？（笑）」への全力回答！' : 'Think There’s Nothing To Do For 3 Nights?'}
          </h3>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            ${isJa
              ? '松山市内中心部だけなら1泊で回れるほどコンパクトなのは事実。しかし、愛媛には自動車CMの舞台となった標高1,700mの「UFOライン」、西日本最高峰「石鎚山（1,982m）」、世界中のサイクリストが熱狂する「しまなみ海道」など、一生に一度は体験したい世界最高峰のアクティビティが揃っています。'
              : 'While downtown Matsuyama can indeed be thoroughly explored in a single night, Ehime is home to the sky-high UFO Line (1,700m), Western Japan’s highest sacred summit Mt. Ishizuchi (1,982m), and the world-famous Shimanami cycling crossing.'}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-orange-400 transition">
              <div class="text-3xl mb-2">🚗 ☁️</div>
              <h4 class="font-bold text-white text-sm mb-1">${isJa ? '瓶ヶ森 UFOライン天空ドライブ' : 'UFO Line Ridge Road'}</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${isJa ? '標高1,700mの稜線を走る雲上の絶景ロード。車CMで世界を驚嘆させた国内屈指のパノラマ。' : '1,700m alpine highway through emerald bamboo ridges famed in national auto commercials.'}</p>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-orange-400 transition">
              <div class="text-3xl mb-2">⛰️ ⛩️</div>
              <h4 class="font-bold text-white text-sm mb-1">${isJa ? '西日本最高峰・石鎚山 登山' : 'Mt. Ishizuchi Alpine Peak'}</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${isJa ? '標高1,982m。鎖場のスリルと鋭峰天狗岳、山岳信仰の聖地。紅葉の名所。' : 'Western Japan’s highest peak (1,982m) with dramatic chain climbs and sharp Tengu rock bluffs.'}</p>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-orange-400 transition">
              <div class="text-3xl mb-2">🚲 🌊</div>
              <h4 class="font-bold text-white text-sm mb-1">${isJa ? 'しまなみ海道 サイクリング縦断' : 'Shimanami Island Cycling'}</h4>
              <p class="text-xs text-slate-300 leading-relaxed">${isJa ? 'CNN世界の7大サイクリングコース。E-bikeなら初心者でも快適に70km縦断！' : 'CNN Top-7 Global cycling trail. Rent an E-bike to easily cross 70km of ocean suspension bridges.'}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Host Hospitality Tips Grid -->
      <div class="mt-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-orange-600 text-xs font-bold uppercase tracking-widest block mb-1">
            ${isJa ? '来訪者・知人を迎えるためのおもてなし Tips' : 'Host Hospitality & Etiquette Tips'}
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-jp">
            ${isJa ? '外さない！松山観光のエスコート術' : 'Local Escort Secrets for Visitors'}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${data.tips.map(tip => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div class="text-3xl mb-3">${tip.icon}</div>
                <h4 class="font-bold text-slate-900 text-base mb-2 font-serif-jp">${tip.title}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${tip.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
