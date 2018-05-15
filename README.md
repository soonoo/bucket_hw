This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React
`$ clone https://github.com/soonoo/bucket_hw`  
`$ npm install`  
`$ npm start`

http://soonoo.me:3000

# SQL
### SQL-1
```sql
SELECT a.title, a.image_url
FROM
(
  SELECT scrapbook.title, card.image_url, scrap.create_at, scrapbook.id
  FROM scrapbook
  JOIN scrap
  ON scrapbook.id = scrap.scrapbook_id
  JOIN card
  ON scrap.card_id = card.id
) a,
(
  SELECT MAX(scrap.create_at) date, scrapbook.id
  FROM scrapbook
  JOIN scrap
  ON scrapbook.id = scrap.scrapbook_id
  JOIN card
  ON scrap.card_id = card.id
  GROUP BY scrapbook.id
) b
WHERE a.create_at = b.date AND a.id = b.id;
```
### SQL-2
사용자(user)
- id
- 이메일
- 비밀번호
- 닉네임
- 성별
- 생일

사진(image)
- id
- 사용자 id
- 이미지 url
- 설명

집들이(housewarming)
- id
- 설명
- 사용자 id

사진좋아요(image_like)
- id
- 사진 id
- 사용자 id

집들이 좋아요(housewarming_like)
- id
- 집들이 id
- 사용자 id

사진 댓글(image_reply)
- id
- 사진 id
- 사용자 id
- 댓글 내용

집들이 댓글(housewarming_reply)
- id
- 집들이 id
- 사용자 id
- 댓글 내용

집들이 사진(housewarming_image)
- id
- 집들이 id
- 사진 id

![다이어그램](/diagram.png)

# 수학적 사고 
### 1
```javasccript
function solution(arr1, arr2) {
	// 각각 오름차순/내림차순으로 정렬후 계산
	arr1.sort((a, b) => {
    return a - b;
	});

	arr2.sort((a, b) => {
    return b - a;
	});

  let sum = 0;
	for(let i = 0; i < arr1.length; i++) {
		sum += arr1[i] * arr2[i];
	}

	return sum;
}
```
