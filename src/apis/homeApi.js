import { Axios } from "./axiosCustom";


export async function getFeatureNews() {
  try {
    const listNews = await Axios.get('/everything?domains=techcrunch.com,thenextweb.com&apiKey=6b1b7b6643db4abbafe92da267fcf8fc&pageSize=4');
    return listNews.data;
  } catch (error) {

  }
}

export async function getNews() {
  try {
    const listNews = await Axios.get('/everything?domains=techcrunch.com,thenextweb.com&apiKey=6b1b7b6643db4abbafe92da267fcf8fc&pageSize=7');
    return listNews.data;
  } catch (error) {

  }
}