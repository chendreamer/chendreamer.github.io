(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(e,a,s){e.exports=s.p+"assets/img/yunsuanfu.04823248.png"},195:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sql语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql语句","aria-hidden":"true"}},[e._v("#")]),e._v(" sql语句")]),e._v(" "),t("p",[t("img",{attrs:{src:s(186),alt:"yunsuanfu"}}),t("br"),e._v("\n查询："),t("code",[e._v("SELECT name,country FROM Websites;")]),t("br"),e._v('\n去掉 "country" 列重复值：'),t("code",[e._v("SELECT DISTINCT country FROM Websites;")]),t("br"),e._v('\n选取国家为 "CN" 的所有网站：'),t("code",[e._v("SELECT * FROM Websites WHERE country='CN';")]),t("br"),e._v("\n逻辑运算的优先级：( ) > not > and  >  or")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select * from emp where not sal > 1500;\nSelect * from emp where comm is null;\nSelect * from emp where sal between 1500 and 3000;\n")])])]),t("p",[e._v("查询 EMP 表 SAL 列中等于 5000，3000，1500 的值:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Select * from emp where sal in (5000,3000,1500);\nSelect * from emp where ename like 'M%';\n")])])]),t("p",[e._v("% 表示多个字值，_ 下划线表示一个字符；"),t("br"),e._v("\n M% : 为能配符，正则表达式，表示的意思为模糊查询信息为 M 开头的。"),t("br"),e._v("\n %M% : 双百分号表示查询的信息在内容中间。"),t("br"),e._v("\n %M_% : 表示查询的字母在内容的倒数第二位"),t("br"),e._v(" "),t("code",[e._v("SELECT * FROM Websites ORDER BY country,alexa;")]),e._v("\n默认 ASC（升序）。DESC（降序）。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("INSERT INTO Websites (name, url, alexa, country) \nVALUES ('百度','https://www.baidu.com/','4','CN');\nUPDATE Websites SET alexa='5000', country='USA' WHERE name='菜鸟教程';\n")])])]),t("p",[e._v("执行没有 WHERE 子句的 UPDATE 要慎重（容易吧所有数据都替换了）。"),t("br"),e._v(" "),t("code",[e._v("DELETE FROM Websites WHERE name='百度' AND country='CN';")]),t("br"),e._v("\n您可以在不删除表的情况下，删除表中所有的行。这意味着表结构、属性、索引将保持不变："),t("br"),e._v(" "),t("code",[e._v("DELETE FROM table_name;或DELETE * FROM table_name;")]),t("br"),e._v("\n查询选取头5条记录：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL： SELECT * FROM Persons LIMIT 5;\nOracle：SELECT * FROM Persons WHERE ROWNUM <=5;\nSELECT * FROM Websites WHERE name IN ('Google','菜鸟教程');\nSELECT * FROM access_log\nWHERE date BETWEEN '2016-05-10' AND '2016-05-14';\n")])])]),t("p",[e._v('把三个列（url、alexa 和 country）结合在一起，并创建一个名为 "site_info" 的别名：')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT name, CONCAT(url, ', ', alexa, ', ', country) AS site_info FROM Websites;\nSELECT w.name, w.url, a.count, a.date  FROM Websites AS w, access_log AS a WHERE a.site_id=w.id and w.name=\"菜鸟教程\";\n")])])]),t("p",[e._v("INNER JOIN：如果表中有至少一个匹配，则返回行"),t("br"),e._v("\nLEFT JOIN：即使右表中没有匹配，也从左表返回所有的行"),t("br"),e._v("\nRIGHT JOIN：即使左表中没有匹配，也从右表返回所有的行"),t("br"),e._v("\nFULL JOIN：只要其中一个表中存在匹配，则返回行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT Websites.id, Websites.name, access_log.count, access_log.date\nFROM Websites  INNER JOIN access_log\nON Websites.id=access_log.site_id;\n")])])]),t("p",[e._v("LEFT JOIN 关键字从左表（table1）返回所有的行，即使右表（table2）中没有匹配。如果右表中没有匹配，则结果为 NULL。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT Websites.name, access_log.count, access_log.date\nFROM Websites LEFT JOIN access_log ON Websites.id=access_log.site_id\nORDER BY access_log.count DESC;\n")])])]),t("p",[e._v("RIGHT JOIN 关键字从右表（table2）返回所有的行，即使左表（table1）中没有匹配。如果左表中没有匹配，则结果为 NULL。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT Websites.name, access_log.count, access_log.date \nFROM access_log RIGHT JOIN Websites ON access_log.site_id=Websites.id \nORDER BY access_log.count DESC;\n")])])]),t("p",[e._v("默认地，UNION 操作符选取不同的值。如果允许重复的值，请使用 UNION ALL。"),t("br"),e._v("\nUNION 结果集中的列名总是等于 UNION 中第一个 SELECT 语句中的列名。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT country, name FROM Websites  WHERE country='CN'\nUNION ALL\nSELECT country, app_name FROM apps\nWHERE country='CN'\nORDER BY country;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE DATABASE my_db;\nCREATE TABLE Persons\n(PersonID int,LastName varchar(255),FirstName varchar(255));\nCREATE TABLE Persons\n( P_Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255),\nAddress varchar(255), City varchar(255)   )\n")])])]),t("p",[e._v("每个表可以有多个 UNIQUE 约束，但是每个表只能有一个 PRIMARY KEY 约束。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DROP TABLE IF EXISTS `apps`;\nCREATE TABLE `apps` (   `id` int(11) NOT NULL AUTO_INCREMENT,\n  `app_name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',\n  `url` varchar(255) NOT NULL DEFAULT '',\n  `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',\n  PRIMARY KEY (`id`)  )\nMySQL：CREATE TABLE Orders\n(O_Id int NOT NULL, OrderNo int NOT NULL, P_Id int,\nPRIMARY KEY (O_Id), FOREIGN KEY (P_Id) REFERENCES Persons(P_Id) )\nOracle：CREATE TABLE Orders\n(O_Id int NOT NULL PRIMARY KEY, OrderNo int NOT NULL,\nP_Id int FOREIGN KEY REFERENCES Persons(P_Id))\nMySQL：CREATE TABLE Persons\n( P_Id int NOT NULL, LastName varchar(255) NOT NULL, FirstName varchar(255),\nAddress varchar(255), City varchar(255), CHECK (P_Id>0) )\nOracle：CREATE TABLE Persons\n( P_Id int NOT NULL CHECK (P_Id>0), LastName varchar(255) NOT NULL,\nFirstName varchar(255), Address varchar(255), City varchar(255) )\n")])])]),t("p",[e._v("DROP TABLE 语句用于删除表。  "),t("code",[e._v("DROP TABLE table_name")]),t("br"),e._v("\nDROP DATABASE 语句用于删除数据库。 "),t("code",[e._v("DROP DATABASE database_name")]),t("br"),e._v("\n改变表中列的数据类型："),t("code",[e._v("ALTER TABLE table_name MODIFY column_name datatype;")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE Persons\n( ID int NOT NULL AUTO_INCREMENT, LastName varchar(255) NOT NULL,\nFirstName varchar(255), Address varchar(255), City varchar(255), PRIMARY KEY (ID))\nCREATE OR REPLACE VIEW view_name AS\nSELECT column_name(s)   FROM table_name   WHERE condition ;\nSELECT * FROM Orders WHERE OrderDate='2008-11-11' ;\nSELECT LastName,FirstName,Address FROM Persons  WHERE Address IS NULL;\nSELECT LastName,FirstName,Address FROM Persons WHERE Address IS NOT NULL;\nSELECT AVG(count) AS CountAverage FROM access_log;\nSELECT COUNT(count) AS nums FROM access_log  WHERE site_id=3;\nSELECT MAX(alexa) AS max_alexa FROM Websites;\nSELECT MIN(alexa) AS min_alexa FROM Websites;\nSELECT SUM(count) AS nums FROM access_log;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT site_id, SUM(access_log.count) AS nums\nFROM access_log GROUP BY site_id;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT Websites.name, SUM(access_log.count) AS nums FROM Websites\nINNER JOIN access_log\nON Websites.id=access_log.site_id\nWHERE Websites.alexa < 200\nGROUP BY Websites.name\nHAVING SUM(access_log.count) > 200;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT name, LENGTH(url) as LengthOfURL   FROM Websites;\nSELECT name, url, Now() AS date  FROM Websites;\nSELECT name, url, DATE_FORMAT(Now(),'%Y-%m-%d') AS date   FROM Websites;\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);