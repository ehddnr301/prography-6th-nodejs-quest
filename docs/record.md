<!-- # Sequelize

- brew install mysql
- mysql.server start
- mysql.server stop

- operatorsAliases : operatorsAliases는 보안에 취약한 연산자를 사용할지 여부를 설정하는 옵션이다.
- Sequelize는 기본적으로 Promise 기반이기 때문에, 모든 CRUD 작업이 Promise의 형태로 시작하고 끝난다는 점을 감안, 위의 코드의 sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행됩니다. 따라서 테이블 정의, 연결 관계 정의 등과 같은 작업은 sync() 이전에 완료해야 합니다. sync()의 결과는 Promise로, 동기화가 완료된 뒤 .then()을 통하여 원하는 CRUD 작업을 수행할 수 있게 됩니다.
- index.js의 config 객체에 적은 database의 이름에 맞춰서 실제 DB에 동일한 이름의 데이터베이스를 생성해줘야 합니다. 그렇지 않으면 Sequelize가 동기화를 하지 못합니다. -->

# mongoose (getTodos)

- mongoose 가 기본적으로 \_id를 생성해줘서 id 를 얻을 수 없었습니다.
- 그래서 mongoose는 가상 필드를 사용하였습니다. set으로 해당하는 스키마에 저장된 값으로 새로운 필드에 새로운 값을 저장할 수 있습니다.

# getTodo

- test코드를 only로 돌렸더니 생성된 todo가 없어서 테스트를 통과하지 못했었습니다.

# updateTodo

- findOneAndUpdate 로 업데이트를 하고나서 업데이트된 내용을 반환하지 않아서 해맸습니다.
- because it returns the document itself, not a result object.
- 이것을 해결하기위해서는 new option을 추가해야 합니다.
- should set the new option to true to return the document after update was applied.

# completeTodo

- test에서 빠져있어서 추가 해주었습니다.

# getComment

- filter가 조건을 통과하는 새로운 array를 생성해 반환하기때문에 ...comment로 작성하였습니다.

# searchTodo

- search 기능 구현을 위해 regular expression을 사용하였습니다.
- mongoose 에서 tags가 검색된 value를 가지고 있는 todo를 찾기위해 \$in을 사용하였습니다.
- tags는 array형태의 검색어를 넘겨주기 때문에 spread를 이용하여 해당 검색어를 모두 \$in 안에 넣어주었습니다.

# 수정

- id type은 number이어야 합니다.

# validation

- model에서 데이터 타입과 required를 검사하고 있어 따로 작성하지 않았습니다.

# createdAt, updatedAt

- 시간이 utc로 표시되고 있어 9시간을 더해 표시될수 있도록 수정하였습니다.

# delete cascade

- todo를 지우면 가지고있는 comment도 지워지도록 추가하였습니다.
