import React, { useEffect, useState } from 'react'
 import "./news.css"
const News = ({filteredArticles}) => {
 console.log(filteredArticles , "datat");
 const formatDate = (dateString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${getDayOfWeek(date)}, ${month} ${ordinalSuffix(day)} ${year}`;
  return formattedDate;
};

const getDayOfWeek = (date) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
};

const ordinalSuffix = (num) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = num % 100;
  return num + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
};

const truncateText = (text, maxLength) => {
  if (!text ||text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
};

  return (
    <div>
    <>
 
  <section className="light">
    <div className="container py-2">
      <div className="h1 text-center text-dark" id="pageHeaderTitle">
       Recent News
      </div>
     {filteredArticles?filteredArticles.map((item , index)=>( <article className="postcard light blue" key={index}>
        <a className="postcard__img_link" href={`${item.url}`}>
          <img
            className="postcard__img"
            src={`${item.urlToImage}`}
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href={`${item.url}`}>{item.title}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              { formatDate(item.publishedAt)}
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
           {truncateText(item.content , 150)} <a href={`${item.url}`} className='btn btn-outline-secondary'>Read More</a>
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              {/* <i className="fas fa-tag mr-2" /> */}
            Source:  {item.source.name}
            </li>
            <li className="tag__item">
              {/* <i className="fas fa-clock mr-2" /> */}
            {item.author}
            </li>
            {/* <li className="tag__item play blue">
              <a href="#">
                <i className="fas fa-play mr-2" />
                Play Episode
              </a>
            </li> */}
          </ul>
        </div>
      </article>)
      
      ):<div className='alert alert-warning '>No data found</div>}
      {/* <article className="postcard light red">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://picsum.photos/501/500"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title red">
            <a href="#">Podcast Title</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              Mon, May 25th 2020
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              Podcast
            </li>
            <li className="tag__item">
              <i className="fas fa-clock mr-2" />
              55 mins.
            </li>
            <li className="tag__item play red">
              <a href="#">
                <i className="fas fa-play mr-2" />
                Play Episode
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="postcard light green">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://picsum.photos/500/501"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title green">
            <a href="#">Podcast Title</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              Mon, May 25th 2020
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              Podcast
            </li>
            <li className="tag__item">
              <i className="fas fa-clock mr-2" />
              55 mins.
            </li>
            <li className="tag__item play green">
              <a href="#">
                <i className="fas fa-play mr-2" />
                Play Episode
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article className="postcard light yellow">
        <a className="postcard__img_link" href="#">
          <img
            className="postcard__img"
            src="https://picsum.photos/501/501"
            alt="Image Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title yellow">
            <a href="#">Podcast Title</a>
          </h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              Mon, May 25th 2020
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fas fa-tag mr-2" />
              Podcast
            </li>
            <li className="tag__item">
              <i className="fas fa-clock mr-2" />
              55 mins.
            </li>
            <li className="tag__item play yellow">
              <a href="#">
                <i className="fas fa-play mr-2" />
                Play Episode
              </a>
            </li>
          </ul>
        </div>
      </article> */}
    </div>
  </section>
</>


    </div>
  )
}

export default News