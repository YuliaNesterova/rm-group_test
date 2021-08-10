import './News.css';

function News(props) {
    return (
        <section className="news">
            <h2 className="news__title">Новости</h2>
            {props.news.map((item) => {
                return (
                    <div className="news__item" key={item.published_at}>
                        <h3 className="news__item-title">{item.title}</h3>
                        <p className="news__item-text">{item.description}</p>
                        <a href={`${item.link}`}>Читать в источнике</a>
                    </div>
                )
            })}



        </section>
    )
}

export default News;