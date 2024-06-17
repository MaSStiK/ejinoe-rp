import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../Context"
import PostsRender from "../PostsRender/PostsRender"
import { setPageTitle } from "../Global"
import ButtonImage from "../ButtonImage/ButtonImage"
import ButtonToTop from "../ButtonToTop/ButtonToTop"
import imgNews from "../../assets/svg/News.svg"
import imgHomeAA from "../../assets/images/home/Home-Ace_Attorney.png"
import imgVk from "../../assets/images/vk.svg"
import imgYoutube from "../../assets/images/youtube.svg"

import imgUpdate from "../../assets/svg/Update.svg"
import ChangelogsRender from "../ChangelogsPage/ChangelogsRender"
import changelogs from "../ChangelogsPage/Changelogs"

import "./HomePage.css"
import "./HomePage-phone.css"

export default function HomePage() {
    useEffect(() => {setPageTitle("Главная")}, [])
    const Context = useContext(DataContext)
    const Navigate = useNavigate()

    return (
        <article>
            <h4 className="page-title">h/home</h4>
            <ButtonToTop />

            <img className="home__image-AA" src={imgHomeAA} alt="Home-Ace_Attorney" draggable="false" />
            <section className="flex-col">
                <h1>Новое видео на канале</h1>
                <iframe width="520" height="280" src="https://www.youtube.com/embed/1yeE1jlYFnc?si=wsqkPsAl4VAA1FZm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="flex-row flex-wrap">
                    <ButtonImage
                        className="tp no-filter"
                        src={imgVk}
                        alt="vk"
                        text="Группа в ВК"
                        title="Перейти к группе в ВК"
                        onClick={() => window.open("https://vk.com/hedgehogs_army", "_blank")}
                    />
                    <ButtonImage
                        className="tp no-filter"
                        src={imgYoutube}
                        alt="vk"
                        text="Канал на YouTube"
                        title="Перейти к каналу на YouTube"
                        onClick={() => window.open("https://www.youtube.com/@hedgehogs_army", "_blank")}
                    />
                </div>
            </section>

            {/* Отображаем последнюю новость и последнее обновление после загрузки постов и юзеров */}
            {Context.Posts.length !== 0 && Context.Users.length !== 0 &&
                <>
                    <section className="flex-col">
                        <h1>Самое актуальное</h1>
                        <PostsRender
                            posts={[...Context.Posts].slice(0, 1)}
                            noSection
                        />
                        <ButtonImage
                            src={imgNews}
                            text="Читать новости"
                            title="Перейти на страницу новостей"
                            width100
                            onClick={() => Navigate("/news")}
                        />
                    </section>

                    <section className="flex-col">
                        <h1>Новое на сайте</h1>
                        <ChangelogsRender
                            changelogs={[...changelogs].slice(0, 1)}
                            noSection
                        />
                        <ButtonImage
                            src={imgUpdate}
                            text="Все обновления"
                            title="Перейти на страницу обновлений"
                            width100
                            onClick={() => Navigate("/changelogs")}
                        />
                    </section>
                </>
            }
        </article>
    )
}
