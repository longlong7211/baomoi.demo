import { useEffect, useState } from "react"
import { getFeatureNews, getNews } from "../../apis/homeApi"

export default function HomeBody() {
  const [listArticles, setListArticles] = useState([]);
  const [listRightNews, setListRightNews] = useState([]);
  async function getListFeatureNews() {
    const listNews = await getFeatureNews();
    if (listNews.status == 'ok') {
      setListArticles(listNews.articles)
    }
  }
  async function getListNews() {
    const listNews = await getNews();
    if (listNews.status == 'ok') {
      console.log(listNews.articles)
      setListRightNews(listNews.articles)
    }
  }
  useEffect(() => {
    getListFeatureNews();
    getListNews();
  }, [])
  return <>
    <div className="container d-flex mt-3">
      <div className="col-8 pe-1">
        <div>
          <img src={listArticles[0]?.urlToImage} alt="" width={'100%'} />
          <div style={{ fontSize: 30 }}>{listArticles[0]?.title}</div>
          <div>2 giờ - 245 liên quan</div>
        </div>
        <div className="d-flex">
          {listArticles.slice(1, 4).map((item, index) => {
            return <div key={index} className="col-4 px-1">
              <img src={item?.urlToImage} alt="" width={'100%'} style={{ aspectRatio: 16 / 9 }} />
              <div style={{ fontSize: 20 }}>{item?.title}</div>
              <div>2 giờ - 245 liên quan</div>
            </div>
          })}
        </div>
      </div>
      <div className="col-4 ps-1">
        {
          listRightNews.map((news) => {
            return <div className="d-flex mt-2">
              <img src={news.urlToImage} alt="" height={100} style={{ aspectRatio: 1, borderRadius: 8 }} />
              <div style={{ fontSize: 20 }}>{news.title}</div>
            </div>
          })
        }
      </div>
    </div>
  </>
}