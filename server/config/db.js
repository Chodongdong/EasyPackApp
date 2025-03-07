const mysql = require('mysql2'); // promise 버전 대신 일반 mysql2 사용
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('❌ MySQL 연결 실패:', err);
        process.exit(1); // 연결 실패 시 프로세스 종료
    } else {
        console.log('✅ MySQL 연결 성공');
    }
});

module.exports = db; // 연결 객체 내보내기
