import { useEffect } from "react"
import { setPageTitle } from "../Global"
import $ from "jquery"

import "./SettingsPage.css"

export default function SettingsPage() {
    useEffect(() => {setPageTitle("Настройки")}, [])

    function handleChangeTheme(style) {
        $("body").attr("theme", style)
        localStorage.pageTheme = style
    }

    return (
        <article>
            <h4 className="page-title">h/settings</h4>

            <section className="se flex-col">
                <h3>Эффекты страницы</h3>

                <div className="settings__radio-input flex-row">
                    <input
                        id="theme-default"
                        type="radio"
                        name="page-theme"
                        onChange={() => {handleChangeTheme("default")}}
                        defaultChecked={localStorage.pageTheme === "default" || localStorage.pageTheme === undefined}
                    />
                    <label htmlFor="theme-default">По умолчанию</label>
                </div>
                
                <div className="settings__radio-input flex-row">
                    <input
                        id="theme-snow"
                        type="radio"
                        name="page-theme"
                        onChange={() => {handleChangeTheme("snow")}}
                        defaultChecked={localStorage.pageTheme === "snow"}
                    />
                    <label htmlFor="theme-snow">Зимняя тема</label>
                </div>

                <div className="settings__radio-input flex-row">
                    <input
                        id="theme-hedgehog34"
                        type="radio"
                        name="page-theme"
                        onChange={() => {handleChangeTheme("hedgehog34")}}
                        defaultChecked={localStorage.pageTheme === "hedgehog34"}
                    />
                    <label htmlFor="theme-hedgehog34">hedgehog34</label>
                </div>
            </section>
        </article>
    )
}
