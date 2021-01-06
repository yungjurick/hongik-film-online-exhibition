const data = {
  categories: {
    A: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '09:00:00',
          '13:59:59'
        ],
        20210108: [
          '09:00:00',
          '13:59:59'
        ],
        20210109: [
          '19:00:00',
          '23:59:59'
        ],
        20210110: [
          '14:00:00',
          '18:59:59'
        ]
      },
      works: [20, 22, 5, 12, 42, 44, 38]
    },
    B: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '09:00:00',
          '13:59:59'
        ],
        20210108: [
          '09:00:00',
          '13:59:59'
        ],
        20210109: [
          '19:00:00',
          '23:59:59'
        ],
        20210110: [
          '14:00:00',
          '18:59:59'
        ]
      },
      works: [8, 19, 7, 24, 11, 6, 23]
    },
    C: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '14:00:00',
          '18:59:59'
        ],
        20210108: [
          '14:00:00',
          '18:59:59'
        ],
        20210109: [
          '09:00:00',
          '13:59:59'
        ],
        20210110: [
          '19:00:00',
          '23:59:59'
        ]
      },
      works: [33, 1, 25, 30, 15, 28, 14]
    },
    D: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '14:00:00',
          '18:59:59'
        ],
        20210108: [
          '14:00:00',
          '18:59:59'
        ],
        20210109: [
          '09:00:00',
          '13:59:59'
        ],
        20210110: [
          '19:00:00',
          '23:59:59'
        ]
      },
      works: [26, 17, 40, 2, 13, 37, 35, 27]
    },
    E: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '19:00:00',
          '23:59:59'
        ],
        20210108: [
          '19:00:00',
          '23:59:59'
        ],
        20210109: [
          '14:00:00',
          '18:59:59'
        ],
        20210110: [
          '09:00:00',
          '13:59:59'
        ]
      },
      works: [16, 29, 9, 34, 41, 0, 3, 32]
    },
    F: {
      openTime: {
        // 2021-01-07 Test Timing
        20210107: [
          '19:00:00',
          '23:59:59'
        ],
        20210108: [
          '19:00:00',
          '23:59:59'
        ],
        20210109: [
          '14:00:00',
          '18:59:59'
        ],
        20210110: [
          '09:00:00',
          '13:59:59'
        ]
      },
      works: [39, 18, 4, 31, 45, 36, 21, 43]
    }
  },
  flashback: [
    {
      id: 1,
      director: '김태엽',
      graduationDate: 2008,
      education: [
        {
          school: '홍익대학교',
          major: '영상영화'
        },
        {
          school: '한국 예술 종합학교 영상원',
          major: '영화과'
        }
      ],
      works: [
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495114560',
          title: '에이리언 블루스',
          year: 2008,
          role: '각본, 감독',
          awards: [
            '제 8회 미쟝센 단편영화제 수상 (2009)',
            '제 2회 서울웹페스트 영화제 수상 (2016)'
          ],
          synopsis: '취업을 위해 지구로 온 외계인들.\n가족들의 생사확인을 위한 우주전화 한통도 그들에겐 쉽지가 않다.'
        },
        {
          selected: false,
          title: '어느 쌀쌀한 보름밤',
          year: 2010,
          role: '감독',
          awards: ['제 5회 대단한 단편영화제 수상 (2011)'],
          synopsis: ''
        },
        {
          selected: false,
          title: '세운상가 블루스',
          year: 2011,
          awards: [],
          role: '각본, 감독',
          synopsis: ''
        },
        {
          selected: false,
          title: '순환선 퇴고',
          year: 2011,
          awards: [],
          role: '감독',
          synopsis: ''
        },
        {
          selected: false,
          title: '선무당',
          year: 2013,
          awards: [],
          role: '감독',
          synopsis: ''
        },
        {
          selected: false,
          title: '화양연화 (TvN 드라마)',
          year: 2020,
          awards: [],
          role: 'B팀 연출',
          synopsis: ''
        }
      ]
    },
    {
      id: 2,
      director: '엄태화',
      graduationDate: 2004,
      education: [
        {
          school: '홍익대학교 조형대학',
          major: '영상영화'
        }
      ],
      works: [
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495114636',
          title: '선인장',
          year: 2003,
          role: '각본, 감독, 편집',
          awards: [],
          synopsis: '제 일은 아지트를 만들어라, 제 이는 성경을 공부하라, 제 삼은 뉴스와 일기예보에 귀를 기울여라.\n죽음의 폭풍우 가운데서 살아남기 위해 받은 계시들이다.\n그리고 자신은 지하 깊은 곳 아지트에 몸을 숨긴다.'
        },
        {
          selected: false,
          title: '사랑니 구멍을 메워줘',
          year: 2007,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '유숙자',
          year: 2010,
          role: '각본, 감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '하트바이브레이터',
          year: 2011,
          role: '감독, 편집',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '촌철살인',
          year: 2011,
          role: '각본, 감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '숲',
          year: 2012,
          role: '각본, 감독, 편집',
          awards: [
            '제 11회 미쟝센 단편영화제 대상 (2012)',
            '제 11회 미쟝센 단편영화제 절대악몽부문 최우수작품상 (2012)',
            '제 13회 대구단편영화제 우수상 (2012)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: '잉투기',
          year: 2013,
          role: '각본, 감독, 편집',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '가려진시간',
          year: 2016,
          role: '각본, 감독, 작사',
          awards: [
            '제 6회 마리끌레르 영화제 특별상 (2017)',
            '제 12회 파리한국영화제 관객상 (2017)',
            '제 54회 대종상영화제 신인감독상, 음악상 (2017)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: '콘크리트 유토피아(가제)',
          year: 2020,
          role: '각본, 감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '동면의 소녀',
          year: 2012,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '만신',
          year: 2013,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '마녀',
          year: 2013,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        }
      ]
    },
    {
      id: 3,
      director: '우문기',
      graduationDate: 2010,
      education: [
        {
          school: '홍익대학교',
          major: '영상영화'
        }
      ],
      works: [
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495108709',
          title: '이공계소년',
          year: 2010,
          role: '감독',
          awards: [],
          synopsis: '어린이날, 가족과 소풍을 다녀온 다른 아이들이 부럽기만 한 영재.\n자신이 착한 아이가 아니라서 어린이날 아무데도 가지 못한 것이라 생각한다.\n학교에서 배운 돋보기의 원리를 이용하여 가족들의 소원을 들어준다.\n하지만 그 행동들이 오히려 예상하지 못했던 사건을 일으킨다.'
        },
        {
          selected: false,
          title: '서울유람',
          year: 2012,
          role: '각본, 감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '몽구스피킹',
          year: 2012,
          role: '단편',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '족구왕',
          year: 2013,
          role: '각색, 감독',
          awards: [
            '제 14회 가치봄영화제 특별상 (2013)',
            '제 15회 디렉터스 컷 어워즈 올해의 독립영화감독상 (2015)',
            '제 20회 춘사영화제 심사위원특별상 (2015)',
            '제 16회 정동진독립영화제 땡그랑동전상 (2018)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: '여자, 남자 - 슬픈 씬',
          year: 2015,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '돌고 돌고 돌고',
          year: 2016,
          role: '감독',
          awards: [
            '제 10회 대단한 단편영화제 KT&G 금관상 (2016)'
          ],
          synopsis: ''
        }
      ]
    },
    {
      id: 4,
      director: '유지영',
      graduationDate: 2011,
      education: [
        {
          school: '홍익대학교',
          major: '영상영화'
        },
        {
          school: '한국영화아카데미',
          major: '영화연출'
        }
      ],
      works: [
        {
          selected: false,
          title: '잘하고 싶은데',
          year: 2009,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '에로스의 계절 (다큐멘터리)',
          year: 2010,
          role: '감독, 주연',
          awards: [],
          synopsis: ''
        },
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495117111',
          title: '고백',
          year: 2011,
          role: '감독, 주연',
          awards: [
            '제 12회 전주국제영화제 감독상 (2011)',
            '제 13회 서울국제여성영화제 최우수상 (2013)'
          ],
          synopsis: '예배를 마치고 집으로 돌아온 독실한 기독교 신자 박씨.\n열쇠가 없던 그는 담을 넘어 집으로 들어가려고 한다.\n아들친구 영배가 지나가다 낑낑대는 박씨를 보고 대신 담을 넘어 대문을 열어준다.\n나른한 여름날 오후, 집안에 우연히 마주 앉은 두 사람.\n불쑥 낯 뜨거운 영배의 고백이 이어지고 박씨는 영배를 올바른 길로 인도하기 위해 함께 기도를 한다.'
        },
        {
          selected: false,
          title: '증명',
          year: 2012,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '어느날 갑자기',
          year: 2014,
          role: '감독, 각본, 편집',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '수성못',
          year: 2017,
          role: '감독, 각본, 편집, 단역',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '너와 극장에서',
          year: 2018,
          role: '감독, 각본, 편집',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '나와 봄날의 약속',
          year: 2017,
          role: '각본, 스크립터',
          awards: [],
          synopsis: ''
        }
      ]
    },
    {
      id: 5,
      director: '임선애',
      graduationDate: 2004,
      education: [
        {
          school: '홍익대학교 조형대학',
          major: '영상영화'
        },
        {
          school: '한국예술종합학교',
          major: '극영화시나리오'
        }
      ],
      works: [
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495107429',
          title: '나쁘지 않아',
          year: 2004,
          role: '감독',
          awards: [],
          synopsis: '버스 안, 그녀는 입사 면접시험에 다녀오는 길이다.\n그녀가 구겨버린 수험표로 면접시험이 신통치 않았음을 알 수 있다.\n그러다 수험표에 붙은 반명함 사진을 떼어내려고 애쓰는 그녀.\n그러나 그녀에겐 그것도 허락지 않은지 사진이 그만 찢어지고 만다.\n이렇게 그녀의 오늘 하루는 운이 더럽게 없는 날이 되고 마는 걸까..?'
        },
        {
          selected: false,
          title: '그거에 대하여 (About it)',
          year: 2007,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '69세',
          year: 2020,
          role: '각본, 감독',
          awards: [
            '제 20회 서울국제여성영화제 피치&캐치 메가박스 대상 (2018)',
            '제 24회 부산국제영화제 KNN관객상 (2019)',
            '제 22회 서울국제여성영화제 박남옥상 (2020)',
            'YWCA 올해의 젊은 지도자상 수상 (2020)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: '러프토크',
          year: 2005,
          role: '각색',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '마이 라띠마',
          year: 2010,
          role: '각본',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '왕의 남자',
          year: 2005,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '화차',
          year: 2012,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '기억의 밤',
          year: 2017,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '남한산성',
          year: 2017,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '사바하',
          year: 2019,
          role: '스토리보드',
          awards: [],
          synopsis: ''
        }
      ]
    },
    {
      id: 6,
      director: '장우진',
      graduationDate: 2011,
      education: [
        {
          school: '홍익대학교',
          major: '영상영화'
        },
        {
          school: '단국대학교',
          major: '영화콘텐츠전문대학원'
        }
      ],
      works: [
        {
          selected: true,
          link: 'https://player.vimeo.com/video/495109283',
          title: '하루',
          year: 2011,
          role: '각본, 감독',
          awards: [],
          synopsis: '지방으로 향하는 훈이와 진이 커플.\n왠지 어색한 둘 사이에 횡성으로 향하는 내내 긴장이 감돈다.\n횡성에 도착한 커플은 때 묻은 누런 타일로 뒤덮인 한 건물 앞에 도착한다.'
        },
        {
          selected: false,
          title: '새출발',
          year: 2013,
          role: '감독, 편집',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '춘천, 춘천',
          year: 2016,
          role: '감독, 제작, 각본, 편집, 촬영, 녹음',
          awards: [
            '제 21회 부산국제영화제 감독상 (2016)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: '겨울밤에',
          year: 2018,
          role: '감독, 각본, 편집',
          awards: [
            '제 40회 낭뜨 3대륙영화제 청소년 심사위원상 (2018)'
          ],
          synopsis: ''
        },
        {
          selected: false,
          title: 'Shot Reverse Shot (설치비디오)',
          year: 2019,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '캠프페이지',
          year: 2020,
          role: '감독',
          awards: [],
          synopsis: ''
        },
        {
          selected: false,
          title: '초행',
          year: 2017,
          role: '프로듀서, 기획개발, 각색',
          awards: [],
          synopsis: ''
        }
      ]
    }
  ],
  flashbackOpenTime: {
    20210107: [
      '20:00:00',
      '21:59:59'
    ],
    20210108: [
      '20:00:00',
      '21:59:59'
    ],
    20210109: [
      '15:00:00',
      '16:59:59'
    ],
    20210110: [
      '19:00:00',
      '20:59:59'
    ]
  }
}

export default data
