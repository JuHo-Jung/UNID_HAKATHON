## κ°λ°νκ²½ π¨π½βπ»
* Windows 10
* Node.js 16.13.0
* MySQL 8.0
## Server νλ‘μ νΈ κ΅¬μ‘° π 
* models : sequelize μ¬μ©μ νμν λ°μ΄ν° λͺ¨λΈμ μ μ
* routes : κ° APIμ λν λΌμ°νμ μ§ν
* config : μλ² κ΅¬μ±μ νμν μ€μ κ° μΈν
## Server νκ²½ μΈν βοΈ
1. Node.js & MySQL μ€μΉ
2. ν΄λΉ repository `git clone` νκΈ°
3. `server` ν΄λλ‘ μ΄λνμ¬ `npm install` λͺλ Ήμ΄ μν
4. MySQLμμ `create.sql` νμΌμ ν΅ν΄ νλ‘κ·Έλ¨ μ€νμ νμν νμ΄λΈμ μμ±
5. `config.json` νμΌμ μ¬μ©μ νκ²½μ λ§μΆ°μ μΈν
6. `npm start` λͺλ Ήμ΄λ‘ μλ² μ€ν
----
## SQL λ°μ΄ν° νμ΄λΈ μ€κ³ π¨βπ«
![image](https://user-images.githubusercontent.com/13315923/140624569-aebcb6b4-156a-4e00-8dc6-8596b611d14c.png)

## μλ² API λ¬Έμ μ λ¦¬ π
* νμκ°μ : `/member` (post)
  * request example
    ```
    {
        "name": "λ°μΈμ",
        "nickname": "inclue",
        "password": "abcd1234",
        "telephone": "01012345678",
        "university_id": 5
    }
    ```
  * response example
    ```
    status code : 201
    {}
    ```

* νμμ λ³΄ λ³΄κΈ° : `/member/{id}` (get)
  * request example
    ```
    {}
    ```
  * response example
    ```
    status code : idκ° μ‘΄μ¬νλ©΄ 200, μ‘΄μ¬νμ§ μμΌλ©΄ 404
    {
        "university_id": 5,
        "name": "λ°μΈμ",
        "nickname": "inclue",
        "telephone": "01012345678",
        "point": 0
    }
    ```

* νμμ λ³΄ μμ  : `/member/{id}` (put)
  * request example
    ```
    {
        "password": "abcde12345",
        "telephone": "01010101010"
    }
    ```
  * response example
    ```
    status code : idκ° μ‘΄μ¬νλ©΄ 200, μ‘΄μ¬νμ§ μμΌλ©΄ 404
    {}
    ```

* λ‘κ·ΈμΈ : `/login` (get)
  * request example
    ```
    {
        "nickname": "inclue",
        "password": "abcd1234"
    }
    ```
  * response example
    ```
    status code : λ‘κ·ΈμΈ μ±κ³΅ μ 200, μ€ν¨ μ 404
    {}
    ```

* μ΄λ©μΌ λ³΄λ΄κΈ° : `/mail/send` (post)
  * request example
    ```
    {
        "email": "wb092311@cau.ac.kr"
    }
    ```
  * response example
    ```
    status code : λ©μΌ λ³΄λ΄κΈ° μ±κ³΅ μ 200, μ€ν¨ μ 404
    {}
    ```

* μ΄λ©μΌ λ³΄λ΄κΈ° : `/mail/check` (get)
  * request example
    ```
    {
        "email": "wb092311@cau.ac.kr",
        "authcode": 174631
    }
    ```
  * response example
    ```
    status code : 200
    {
        "check": true
    }
    ```
