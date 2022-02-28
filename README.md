# 系统实现
## 前台首页
前台首页界面：
- 导航栏部分包括：首页、地区新闻、数据、谣言。
- 导航栏下班左边为主体新闻部分，右边栏为疫情数据和谣言部分。
- 左边栏上部分为轮播图和热门新闻推荐。
- 下方为疫情视频列表。新闻推荐列表上方为刷新按钮，下方为加载更多按钮。
- 右边栏则能通过带颜色的疫情数据直观了解疫情确诊人数等数据信息。以及谣言部分。

![image](https://user-images.githubusercontent.com/51811652/155848229-3863b0dc-99db-48be-a575-11397e880c27.png)
## 前台新闻详情
前台新闻详情功能：在新闻详情页主要功能可以查阅新闻详情，点赞和评论新闻。评论区可看到当前评论数，和此条新闻的留言，用户进行评论还能添加表情，也可回复他人。

![image](https://user-images.githubusercontent.com/51811652/155848250-9104813c-a1b5-4e06-a239-45214a6267ff.png)
## 前台疫情动态模块
前台疫情动态模块功能：疫情动态模块通过可视化疫情数据，让用户可视化了解疫情态势。在此模块，用户通过切换切换省份，可以查询到所查省份的疫情情况。

![image](https://user-images.githubusercontent.com/51811652/155848253-b61c662d-8c85-4db2-aa4a-f11c128979dd.png)
## 后台添加新闻模块
后台添加新闻模块功能：管理员可在此页，通过填写新闻标题、新闻详情和简介、选择标签和发布时间进行添加文章操作。编写新闻，提供边写边预览的功能，同时系统也能支持Markdown形式的文本，提高编写速度。在新闻列表页点击编辑跳转至添加新闻页面，通过ID判断新闻是否已存在，存在则进行更新的操作。

![image](https://user-images.githubusercontent.com/51811652/155848261-cfd4222b-dc0c-44fe-9dc8-99d507e47e22.png)

后台添加新闻功能代码实现。
添加新闻的逻辑流程如下：
1. 管理员登录后台，获得密钥Token。
2. 管理员完成添加内容，点击发布。
3. 系统验证输入内容完整性。
4. 系统检验新闻ID是否重复，重复则为更新操作，否则为插入操作。
5. 发起请求，带上Token，根据情况发送更新或插入请求。
6. 中台验证Token合法性，合法则添加数据到数据库。
7. 返回状态。
```
function AddArticle(props) {
const saveArticle = () => {//保存文章
	checkInput() //判断用户输入完整性
	let dataProps = {} //传递到接口的参数
		//...省略传参
		if (articleId === 0) {//新增新闻
			//发起添加新闻请求
			axios.get(options);
		}
	}
}
export default AddArticle	
```
## 后台新闻管理模块
后台新闻管理模块功能：文章按分类进行搜索查询操作，按输入进行搜索查询操作，按分类和内容进行精细查询。对于每天新增爬取的新闻，选择审核数量进行一键审核，选择列表项点击审核跳转至详情进行精细审核。点击列表中一项进行删除，弹出提示框确认后将该项从数据库中删除。

![image](https://user-images.githubusercontent.com/51811652/155848275-d6d17574-5eda-47dc-9bf7-50ed3ff80422.png)

后台新闻爬取功能代码实现

爬取新闻的逻辑流程如下：
1. 得到爬取新闻的URL地址。
2. 解析HTML结构获取所需内容，如标题新闻详情等。
3. 将获取的数据通过中台存入数据库。
4. 返回状态。
//主函数获取疫情新闻
```
class HomeController extends Controller{
async getNews() {
	var getNewsData = (newsUrl) => {
		return new Promise((resolve, reject) => {
			axios.get(options)
		})
	}
	var newsUrl = "hhttps://lab.isaaclin.cn/nCoV/api/news"
	//根据URL获取新闻数据
	let newsDataList = await getNewsData(newsUrl) 
	for (let newsData of newsDataList) {
		//添加数据库
		this.addArticleDataToDB(articleData)	}
}
}
//子函数获取新闻title
class getArticleTitle {
	const http = require("http")
	const cheerio = require("cheerio")
	//获取新闻url
	const getArticleUrl = require("./getArticleUrl.js")
	async getTitle(sourceUrl) {
	return new Promise((resolve, reject) => {
		let articleUrl = new getArticleUrl().getFormSourceUrl(sourceUrl)
		if (articleUrl == "") resolve("")
		http.get(options)
	})
}
}
module.exports = getArticleTitle
```
