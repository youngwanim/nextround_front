import st_config from '@/config/config.js'

export const business_category = [
  {key: 0, text: "모두선택"},
  {key: 1, text: "광업"},
  {key: 2, text: "제조업"},
  {key: 3, text: "인프라산업"},
  {key: 4, text: "미디어컨텐츠"},
  {key: 5, text: "수도사업"},
  {key: 6, text: "환경정화"},
  {key: 7, text: "건설"},
  {key: 8, text: "인테리어"},
  {key: 9, text: "이커머스"},
  {key: 10, text: "운송서비스"},
  {key: 11, text: "숙박"},
  {key: 12, text: "음식"},
  {key: 13, text: "Delivery"},
  {key: 14, text: "Cooking"},
  {key: 15, text: "금융"},
  {key: 16, text: "투자"},
  {key: 17, text: "디자인"},
  {key: 18, text: "보험"},
  {key: 19, text: "부동산"},
  {key: 20, text: "임대"},
  {key: 21, text: "사회복지"},
  {key: 22, text: "스포츠"},
  {key: 23, text: "게임"},
  {key: 24, text: "art"},
  {key: 25, text: "헬스케어"},
  {key: 26, text: "생명공학"},
  {key: 27, text: "의료기기"}
]

export const portfolio_detail_sample = [
  {
    id: 0,
    auth_type: 3,
    title: '<업체명>',
    sub_title: '서비스, 비전, 캐치프레이즈를 표시합니다',
    description: '해당 업체로부터 제공되는 상품이나 서비스에 대한 간단한 설명과 기타 필요한 내용을 기술할 수 있습니다',
    image_url: 'http://t1.daumcdn.net/brunch/service/user/lsb/image/YvomBG8Cz0S_XvibITy4LjtCnDk.jpg',
    image_list: ['https://fungilab.com/wp-content/uploads/2017/05/APM_03.jpg',
                  'https://fungilab.com/wp-content/uploads/2017/02/viscolead-ONE-main-img-prod.jpg',
                  'https://fungilab.com/wp-content/uploads/2017/07/Fungilab-Beaker-prev.jpg'],
    product_auth_type: 3,
    product_title: '<상품 혹은 서비스 소개 타이틀>',
    product_image: ['https://cdn11.bigcommerce.com/s-tpllrvymx2/images/stencil/2048x2048/products/2898/1551/Eco-Tote-Bag-Small-Sample__45581.1532622391.jpg'],
    product_introduce: '상품 혹은 서비스 소개 본문 내용 : Beaker inox support for 8L THERMOVISC B100F8TFT B100F8TFT-US THERMOVISC B100F8-30TFT/ B100F8-30TFT-US',
    team_auth_type: 3,
    team_title: '팀 소개 타이틀',
    team_image: 'https://www.netclipart.com/pp/m/26-261864_people-clipart-large-group-small-sample-of-people.png',
    team_introduce: '흔히 남이 한다고 해서 따라 하는 경우 큰 효과를 얻기 힘들다. 애자일도 똑같다. 애자일 프로젝트를 성공 시키기 위해서는 무엇보다 애자일 개발 원칙 선언문이라고 불리는 애자일 선언(Agile Manifesto)을 중심으로 애자일 원칙에 대해 팀원 전체가 완벽히 이해하는 것이 중요하다.',
    ceo_auth_type: 3,
    ceo: 'Bruce Springsteen',
    ceo_image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bruce_Springsteen_-_Roskilde_Festival_2012.jpg/250px-Bruce_Springsteen_-_Roskilde_Festival_2012.jpg'],
    ceo_introduce: '브루스 프레드릭 조지프 스프링스틴(Bruce Frederick Joseph Springsteen,\
       1949년 9월 23일~)은 미국의 싱어송라이터이다. 별명은 보스(The Boss)이며, 20개의 그래미상,\
        2개의 골든 글로브상, 1개의 아카데미상을 수상하였다.',
    business_category: [1,2],
    ir_auth_type: 3,
    ir_file: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    open_id: '000DFDF5429FC42F43005000'
  },
  {
    id: 1,
    auth_type: 3,
    title: '컬처히어로',
    sub_title: '미디어커머스 스타트업',
    description: '독자는 퀄리티만 보장되면 지불하려는 욕구가 있다. 사람들이 콘텐츠에 돈을 안 쓴다고 하는데, 개인적으로는 돈을 쓴다고 본다. 구매할 정도의 이점, 품질, 유용함을 (미디어가) 제시하지 못한 거다. ‘고퀄’ 콘텐츠를 어떻게 생산할 것인가의 문제다. 이런 측면의 접근이 이뤄지면 좋겠다고 생각하고 있다.',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
    image_list: ['http://www.bloter.net/wp-content/uploads/2019/09/EBCDFE92-B68E-4FF8-98C1-FA8704755F38-800x318.png',
                  'http://www.bloter.net/wp-content/uploads/2019/09/EBCDFE92-B68E-4FF8-98C1-FA8704755F38-800x318.png',
                  'https://fungilab.com/wp-content/uploads/2017/07/Fungilab-Beaker-prev.jpg'],
    product_title: '뉴닉 뉴스레터',
    product_image: ['http://www.bloter.net/wp-content/uploads/2019/09/00501169_20190603-800x416.jpg'],
    product_introduce: '세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜게 우리 탓은 아니잖아요! NEWNEEK은 바쁜 사람들이 세상과 연결되어 더 나은 선택을 하도록 돕고 있어요. 일상의 대화처럼 \
    시사 이슈를 전하는 이메일 뉴스레터가 월수금 아침마다 찾아갑니다.',
    // team_title: '팀 소개 타이틀',
    // team_image: 'https://www.netclipart.com/pp/m/26-261864_people-clipart-large-group-small-sample-of-people.png',
    // team_introduce: '흔히 남이 한다고 해서 따라 하는 경우 큰 효과를 얻기 힘들다. 애자일도 똑같다. 애자일 프로젝트를 성공 시키기 위해서는 무엇보다 애자일 개발 원칙 선언문이라고 불리는 애자일 선언(Agile Manifesto)을 중심으로 애자일 원칙에 대해 팀원 전체가 완벽히 이해하는 것이 중요하다.',
    ceo: '한상엽 CEO',
    ceo_image: ['http://www.bloter.net/wp-content/uploads/2019/09/DSC003582-800x1200.jpg'],
    ceo_introduce: '새로운 미디어 환경을 만들어내고 싶어요. 제2의 페이스북, 유튜브를 발굴하겠다는 욕심은 있죠. 하지만 이제 막 이 바닥에 들어왔으니까요, 배운다는 자세로 겸허하게 접근하려고 합니다.',
    business_category: [2,3],
    ir_file: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    open_id: '111DFDF5429FC42F43005111',
    product_auth_type: 3,
    team_auth_type: 0,
    ceo_auth_type: 3,
    ir_auth_type: 3,
  },
  {
    id: 2,
    auth_type: 3,
    title: '스타일씨',
    sub_title: '마이크로 인플루언서 리워드마켓',
    description: '한 번의 터치로 자신만의 쇼핑링크를 생성해 판매가 일어나면 매출의 최대 10%까지 보상으로 얻는 이커머스 플랫폼',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
    image_list: ['http://www.bloter.net/wp-content/uploads/2019/09/EBCDFE92-B68E-4FF8-98C1-FA8704755F38-800x318.png',
                  'http://www.bloter.net/wp-content/uploads/2019/09/EBCDFE92-B68E-4FF8-98C1-FA8704755F38-800x318.png',
                  'https://fungilab.com/wp-content/uploads/2017/07/Fungilab-Beaker-prev.jpg'],
    product_title: '파트너 셀러',
    product_image: ['http://www.bloter.net/wp-content/uploads/2019/09/00501169_20190603-800x416.jpg',
                  'https://i.ytimg.com/vi/ZcQJjTERuGc/sddefault.jpg'],
    product_introduce: '전국민 인플루언서, N잡러 시대. 누구나 어디서나 물건을 사고 판매도 할 수 있습니다. \
스타일씨 쇼핑몰은 구매하는 곳으로만 끝나는게 아니라 직접 소비자가 판매도 하고 \
수익을 낼 수 있는 공간입니다.',
    // team_title: '팀 소개 타이틀',
    // team_image: 'https://www.netclipart.com/pp/m/26-261864_people-clipart-large-group-small-sample-of-people.png',
    // team_introduce: '흔히 남이 한다고 해서 따라 하는 경우 큰 효과를 얻기 힘들다. 애자일도 똑같다. 애자일 프로젝트를 성공 시키기 위해서는 무엇보다 애자일 개발 원칙 선언문이라고 불리는 애자일 선언(Agile Manifesto)을 중심으로 애자일 원칙에 대해 팀원 전체가 완벽히 이해하는 것이 중요하다.',
    ceo: '박재범 CEO',
    ceo_image: ['https://stylec.co.kr/data/editor/2008/2949862092_1597194235.5761.jpg'],
    ceo_introduce: '유명인의 말보다는 나와 크게 다르지 않은 내 지인인 마이크로 인플루언서의 말을 더 신뢰한다는 철학이 스타일씨의 성공 포인트라고 생각합니다.\
     적게는 1만 원에서 많게는 100만 원씩 리워드 받는 마이크로 인플루언서가 생겨나고 있으며, 누구나 참여할 수 있기에 디지털 노마드를 꿈꾸는 전문가뿐 아니라 용돈벌이를 위한 학생들까지 자발적으로 참여가 늘어나고 있는 상황이죠',
    business_category: [3,4],
    ir_file: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    open_id: '289DFDF5429FC42F43002222',
    product_auth_type: 3,
    team_auth_type: 0,
    ceo_auth_type: 3,
    ir_auth_type: 3,
  },
  {
    id: 3,
    auth_type: 3,
    title: '스파크플러스',
    sub_title: '당신이 성공에 집중하는 동안, 우리는 당신에게 집중합니다',
    description: '오피스의 본질은 일하는 곳입니다. 우리는 당신이 일에만 집중할 수 있도록 환경, 노하우, 서비스를 맞춤으로 지원합니다. \
    당신이 성공에 집중하는 동안, 우리는 당신에게 집중합니다.',
    image_url: 'https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
    image_list: ['https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
                  'http://www.bloter.net/wp-content/uploads/2019/09/EBCDFE92-B68E-4FF8-98C1-FA8704755F38-800x318.png',
                  'https://fungilab.com/wp-content/uploads/2017/07/Fungilab-Beaker-prev.jpg'],
    product_title: '커스텀 오피스',
    product_image: ['http://www.bloter.net/wp-content/uploads/2019/09/00501169_20190603-800x416.jpg',
                  'https://i.ytimg.com/vi/ZcQJjTERuGc/sddefault.jpg'],
    product_introduce: '스파크플러스의 커스텀오피스 전문 컨설턴트가 부동산 계약, 인테리어 설계, 시공, 가구 배치까지 \
​스파크플러스는 고객사의 특성을 반영한 사무 공간을 제공합니다. 입주 후에는 각 지점에 상주하는 커뮤니티 매니저가 업무에만 집중하실 수 있도록 전문 운영 서비스를 제공합니다.',
    team_title: '스플 크루는 이렇게 일해요',
    team_image: ['https://sparkplus.co/wp-content/uploads/2019/10/%ED%81%AC%EB%9F%AC%EC%89%AC-02.png',
                  'https://sparkplus.co/wp-content/uploads/2019/10/%EC%A0%9C%EB%8B%88-02.png',
                'https://sparkplus.co/wp-content/uploads/2019/10/%EB%A0%88%EC%98%A4-02.png'],
    team_introduce: '스플러가 이용하는 공간을 구축, 관리하고 있습니다. 고객의 목소리에 집중하는 것이 스파크플러스가 발전하는 \
길이라 생각하며, 브랜드 성장에 힘을 보태고 있습니다. 전 지점 스플러에게 더 좋은 스파크플러스의 커뮤니티를 제공하기 위해 노력하고 있습니다.',
    // ceo: '박재범 CEO',
    // ceo_image: 'https://stylec.co.kr/data/editor/2008/2949862092_1597194235.5761.jpg',
    // ceo_introduce: '유명인의 말보다는 나와 크게 다르지 않은 내 지인인 마이크로 인플루언서의 말을 더 신뢰한다는 철학이 스타일씨의 성공 포인트라고 생각합니다.\
    //  적게는 1만 원에서 많게는 100만 원씩 리워드 받는 마이크로 인플루언서가 생겨나고 있으며, 누구나 참여할 수 있기에 디지털 노마드를 꿈꾸는 전문가뿐 아니라 용돈벌이를 위한 학생들까지 자발적으로 참여가 늘어나고 있는 상황이죠',
    business_category: [4,5],
    ir_file: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    open_id: 'F89DFDF5429FC42F43005562',
    product_auth_type: 3,
    team_auth_type: 3,
    ceo_auth_type: 0,
    ir_auth_type: 3,
  },
  {
    id: 4,
    auth_type: 3,
    title: '벤처스퀘어',
    sub_title: '미디어의 미래를 디자인하다',
    description: '벤처스퀘어는 2010년 4월부터 서비스를 시작한  대한민국 대표 스타트업 전문 미디어입니다. 스타트업을 대상으로 사람, 기술, 제품과 서비스 등을 심도 있는 분석 기사로 소개, 초기 스타트업의 1등 도우미를 자부합니다.\
    벤처스퀘어는 앞으로도 스타트업 투자사와 정부기관 등을 묶어주는 스타트업 허브로 혁신적이고 지속 가능한 스타트업 생태계를 만들기 위한 활동을 계속할 것입니다.',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
    image_list: ['https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
                  'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-03-1.png',
                  'https://www.venturesquare.net/wp-content/uploads/2015/02/venturesquare-007-768x511.jpg'],
    product_title: '미디어 액셀러레이팅 플랫폼',
    product_image: ['https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-02-1.png'],
    product_introduce: '미디어 스타트업을 발굴, 지원하며 새로운 비즈니스 모델을 발굴할 수 있도록 비즈니스 모델 개발 등 다양한 프로젝트를 진행, 미디어의 미래를 함께 설계하는 데 앞장서려 합니다.',
//     team_title: '스플 크루는 이렇게 일해요',
//     team_image: ['https://sparkplus.co/wp-content/uploads/2019/10/%ED%81%AC%EB%9F%AC%EC%89%AC-02.png',
//                   'https://sparkplus.co/wp-content/uploads/2019/10/%EC%A0%9C%EB%8B%88-02.png',
//                 'https://sparkplus.co/wp-content/uploads/2019/10/%EB%A0%88%EC%98%A4-02.png'],
//     team_introduce: '스플러가 이용하는 공간을 구축, 관리하고 있습니다. 고객의 목소리에 집중하는 것이 스파크플러스가 발전하는 \
// 길이라 생각하며, 브랜드 성장에 힘을 보태고 있습니다. 전 지점 스플러에게 더 좋은 스파크플러스의 커뮤니티를
// 제공하기 위해 노력하고 있습니다.',
    ceo: '명승은 대표, 기자에서 CEO로',
    ceo_image: ['http://farm9.staticflickr.com/8255/8660957801_6f7da91cc8_z.jpg'],
    ceo_introduce: '벤처와 스타트업을 위한 미디어, 명승은 대표는 이와 같은 목적을 품고 영속적인 미디어를 지향한다. 그는 벤처를 반짝 비추는 ‘빛’보다 꾸준하게 내리쬐는 ‘따뜻한 볕’이 되기를 희망하는 것이다. 뿐만 아니라 ‘광장’이라는 형태의 벤처 허브로서 관련 분야에 전문성을 가진 고급 정보의 필요성을 역설한다. 모든 벤처가 모이는 곳, 벤처스퀘어는 새로운 장르의 미디어다.',
    business_category: [4,5],
    ir_file: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf',
    open_id: '8F9DFDF5429FC42F43002655',
    product_auth_type: 3,
    team_auth_type: 0,
    ceo_auth_type: 3,
    ir_auth_type: 3,
  }
]

export const portfolios_sample = [
  {
    id: 0,
    title: 'Lucidity',
    description: '컨텐츠 미디어 스타트업',
    image_url: 'http://t1.daumcdn.net/brunch/service/user/lsb/image/YvomBG8Cz0S_XvibITy4LjtCnDk.jpg',
    business_category: [1,2]
  },
  {
    id: 1,
    title: '컬처히어로',
    description: '미디어커머스 스타트업',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
    business_category: [4]
  },
  {
    id: 2,
    title: '스타일씨',
    description: '마이크로 인플루언서 리워드마켓',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2020/08/unnamed-768x512.jpg',
    business_category: [4,9]
  },
  {
    id: 3,
    title: '스파크플러스',
    description: '모공유오피스',
    image_url: 'https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
    business_category: [19,20]
  },
  {
    id: 4,
    title: '벤처스퀘어',
    description: '스타트업을 위한 기술, 제품, 트렌트, 컨설팅을 제공합니다',
    image_url: 'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
    business_category: [3,5,6]
  },

]

export const ir_sample = [
  {
    id: 1,
    date: '2020-07-20',
    state: 'done',
    ir_url: './assets/ad_video.mp4',
    ports: [0,1,2,3,4],
  },
  {
    id: 2,
    date: '2020-08-25',
    state: 'ongoing',
    ir_url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    ports: [2,3,4,5],
  },
  {
    id: 3,
    date: '2020-08-26',
    state: 'ongoing',
    ir_url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    ports: [2,3,4,5],
  },
  {
    id: 4,
    date: '2020-08-27',
    state: 'todo',
    ir_url: '',
    ports: [3,4,5,6],
  }
]

export const user_sample = [
  {
    id: 0,
    login_key: 'startup',
    login_value: 'Startup1!',
    open_id: '8F9DFDF5429FC42F43002655',
    access_token: '09306a5370aaa7dae226c24fa76b2a4c4365ded90d0fe1b2',
    name: '명승은',
    corporation_name: '벤처스퀘어',
    is_active: true,
    qualified: true,
    user_type: 2,
    email: 'msuceo@venturesquare.co.kr',
    mdn: '0101112222',
    locale: 'ko',
    profile_image: './assets/venture_square.png',
    created_date: '2020-08-01',
    last_visited_date: '2020-08-22',
    address: '165 역삼로, 역삼동, 강남구, 서울특별시 ',
    business_card: 'https://i.pinimg.com/736x/e5/0d/be/e50dbefa60ccfdacadcd5e6d032ece0c.jpg',
  },
  {
    id: 1,
    login_key: 'venturec',
    login_value: 'VCapital1!',
    open_id: '812568C94EF54D8890E1F03A',
    access_token: '81d01a79289068d857a3b7ae97d318e3b8012ad783ce2e06',
    name: '홍길동',
    corporation_name: '한국토지주택투자공사',
    is_active: true,
    qualified: true,
    user_type: 1,
    email: 'vctailor@yes.com',
    mdn: '01022223333',
    locale: 'ko',
    profile_image: 'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
    created_date: '2020-08-01',
    last_visited_date: '2020-08-25',
    address: '서울특별시 여의도구 여의도동',
    business_card: 'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
  },
  {
    id: 2,
    login_key: 'ordinary',
    login_value: 'People1!',
    open_id: 'C6C8DCD149A025B61E56A312',
    access_token: 'f712360abd63d4907cb0e55da4acb54c1e8f6ed5dc0c599b',
    name: '워렌버핏',
    corporation_name: '센텀호텔',
    is_active: true,
    qualified: true,
    user_type: 3,
    email: 'desperados@naver.com',
    mdn: '01033334444',
    locale: 'ko',
    profile_image: 'https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png',
    created_date: '2020-08-01',
    last_visited_date: '2020-08-24',
    address: '부산광역시 해운대구 센텀3로 20(우동) 48060',
    business_card: 'http://www.giftsum.com/rb/files/2015/11/09/62c0f173961e83f066672ad56436e077224740.jpg',
  },
]

export const curation_sample = [
  {
    type: 0,
    contents: {
      content_title: '스타트업 소개',
      media_type: 1, // 0: image 1: video
      media_url: st_config.oss_url + '/media/onoffmix_1080p.mp4',
      media_url_extra: '/assets/about.jpg',
      title: '온오프믹스',
      description: ['모임에 대한 모든 것', '온오프믹스는 사람들간의 원활한 소통과 만남을 위해',
        '쉽고 편리하게 모임을 위한 개설, 참여, 정보 등의', '모든 서비스를 제공하는 통합 솔루션입니다',
        '공유의 가치를 실현할 수 있도록 온오프믹스가 함께합니다.'
      ],
      target_type: 0, //0: portfolio, 1: event 2: reserved
      target_id: 3, // portfolio_id or event_id
    }
  },
  {
    type: 1,
    contents: {
      title: '#핀테크',
      sub_title: '',
      target_type: 0, //0: portfolio, 1: event 2: reserved
      target_object_array: [
        {
          image: 'http://t1.daumcdn.net/brunch/service/user/lsb/image/YvomBG8Cz0S_XvibITy4LjtCnDk.jpg',
          title: '<업체명>',
          sub_title: '서비스, 비전, 캐치프레이즈를 표시합니다',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
          title: '컬처히어로',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: st_config.oss_url + '/media/stylec.png',
          title: '스타일씨',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
          title: '스파크플러스',
          sub_title: '공유 오피스',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
          title: '벤처스퀘어',
          sub_title: '스타트업 전문 미디어',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
      ], // portfolio_id or event_id
    }
  },
  {
    type: 1,
    contents: {
      title: '#블록체인',
      sub_title: '',
      target_type: 0, //0: portfolio, 1: event 2: reserved
      target_object_array: [
        {
          image: st_config.oss_url + '/media/stylec.png',
          title: '스타일씨',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
          title: '스파크플러스',
          sub_title: '공유 오피스',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
          title: '벤처스퀘어',
          sub_title: '스타트업 전문 미디어',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'http://t1.daumcdn.net/brunch/service/user/lsb/image/YvomBG8Cz0S_XvibITy4LjtCnDk.jpg',
          title: '<업체명>',
          sub_title: '서비스, 비전, 캐치프레이즈를 표시합니다',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
          title: '컬처히어로',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: st_config.oss_url + '/media/stylec.png',
          title: '스타일씨',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://sparkplus.co/wp-content/uploads/2020/07/home-main-2-1500x630.jpg',
          title: '스파크플러스',
          sub_title: '공유 오피스',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2018/01/2018-about-01-1.png',
          title: '벤처스퀘어',
          sub_title: '스타트업 전문 미디어',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: 'https://www.venturesquare.net/wp-content/uploads/2020/08/1597051190050.png',
          title: '컬처히어로',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
        {
          image: st_config.oss_url + '/media/stylec.png',
          title: '스타일씨',
          sub_title: '미디어커머스 스타트업',
          target_type: 0, //0: portfolio, 1: event 2: reserved
          target_id: 3, // portfolio_id or event_id
        },
      ], // portfolio_id or event_id
    }
  },
  {
    type: 2,
    contents: {
      title: 'Upcoming Round',
      sub_title: '',
      main_media_type: 1,
      main_media_url: st_config.oss_url + '/media/curation_sample_test2.png',
      target_type: 1,
      target_id: 0,
      sub_col_1: {
        title: '404번째 라운드',
        description: '"온라인 IR round로, 카카오 TV live채널을 통해 시청 가능합니다(채널명: 넥스트라운드/KDB NEXTROUND)"',
        link: 'https://tv.kakao.com/search/channels?q=%EB%84%A5%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9A%B4%EB%93%9C'
      },
      sub_col_2: {
        target_type: 0, //0: portfolio, 1: event 2: reserved
        target_object_array: [
          {
            image: st_config.oss_url + '/media/hauteworks.png',
            title: '오트웍스',
            sub_title: '마이크로 모빌리티 앱 서비스',
            target_type: 0, //0: portfolio, 1: event 2: reserved
            target_id: 3, // portfolio_id or event_id
          },
          {
            image: st_config.oss_url + '/media/inpock.png',
            title: '인포크',
            sub_title: '인플루언서 커머스 컨시어지 서비스',
            target_type: 0, //0: portfolio, 1: event 2: reserved
            target_id: 3, // portfolio_id or event_id
          },
          {
            image: st_config.oss_url + '/media/glorang.png',
            title: '글로랑',
            sub_title: '아시아 대표 온라인 학위수여 플랫폼',
            target_type: 0, //0: portfolio, 1: event 2: reserved
            target_id: 3, // portfolio_id or event_id
          },
        ], // portfolio_id or event_id
      },
    }
  }
]

export const event_sample = [
  {
    date: '2020-08-20',
    ir_id: 0,
  }
]
