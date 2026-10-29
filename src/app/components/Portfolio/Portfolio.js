import Image from "next/image";
import Work1 from '@/../public/images/portfolio/AppMockup.png'
import CommunitySimbirSoft from '@/../public/images/portfolio/Community.jpeg'
import CRM from "@/../public/images/portfolio/CRM.png"
import DronesWork from "@/../public/images/portfolio/Drones.png"
import Sateco from "@/../public/images/portfolio/Sateco.png"
import Link from "next/link";

export default function PortfolioBlock(){
    return(
        <section className="max-sm:mt-8 max-sm:px-2 sm:max-lg:mt-18 mt-24">
            <h2 className="max-sm:text-3xl sm:max-lg:text-4xl text-6xl font-bold text-[#999999] mb-8">Портфолио</h2>
            <div className="max-sm:mb-8 max-lg:w-full max-lg:flex-col flex justify-between items-center mb-12 cursor-pointer text-[#6D6D6D] hover:text-[#003030] transition-colors duration-300 hover:duration-300">
                <Image className="max-sm:mb-4 max-lg:w-auto sm:max-lg:h-[500px] md:max-lg:mb-6 w-[40%] h-auto object-contain" src={Work1} alt="Работа 1"/>
                <div className="max-lg:w-full w-[55%]">
                    <h3 className="text-2xl font-bold text-[#999999]">Поехали - сервис заказа поездок</h3>
                    <h4 className="mb-2">Full-stack Developer · Pet Project · 11.03.2024 - по н.в.</h4>
                    <Link className="text-blue-500 decoration-solid underline" href={'https://poehali163.ru'} target="_blank"><b>Открыть приложение</b></Link>
                    <p>Разработал веб-приложение для заказа поездок в Шенталинском районе Самарской области. Проект включает клиентскую и серверную части, интерактивную карту, расчёт стоимости поездки и обмен данными между пассажирами и водителями в реальном времени. </p>
                    <p><b>Основные задачи и достижения: </b></p>
                    <ul className="list-disc list-inside">
                        <li>Реализовал backend на Java и Spring Boot, REST API и авторизацию с использованием JWT.</li>
                        <li>Разработал систему создания и обработки заказов с отдельными сценариями для пассажиров и водителей.</li>
                        <li>Интегрировал маршрутизацию и геопоиск на основе OpenStreetMap, Valhalla и Nominatim.</li>
                        <li>Реализовал обмен событиями в реальном времени через WebSocket и STOMP.</li>
                        <li>Настроил работу с MySQL и Redis, контейнеризацию сервисов с помощью Docker.</li>
                        <li>Развернул приложение на собственном сервере под Ubuntu с использованием Nginx и HTTPS.</li>
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2 work_block_special_items"><p>NextJs</p> <p>MySQL</p> <p>Java</p> <p>Spring Boot</p> <p>REST API</p> <p>Docker</p> <p>Git</p> <p>JWT</p> <p>PWA</p> <p>JavaScript</p> <p>Linux</p> <p>Nginx</p> <p>Valhalla</p> <p>WebSocket</p> <p>Redis</p> <p>Nominatim</p> <p>OpenStreetMap</p> <p>STOMP</p></div>
                </div>
            </div>
            <div className="max-sm:mb-8 max-sm:mb-4 max-lg:flex-col flex flex-row-reverse justify-between items-center mb-12 cursor-pointer text-[#6D6D6D] hover:text-[#003030] transition-colors duration-300 hover:duration-300">
                <Image className="max-sm:mb-4 max-lg:w-full max-lg:h-auto max-lg:mb-6 w-[40%] h-auto object-contain" src={CommunitySimbirSoft} alt="Комьюнити симбирсофт"/>
                <div className="max-lg:w-full w-[55%]">
                    <h3 className="text-2xl font-bold text-[#999999]">Агрегатор услуг для транспортных средств - PIONEER</h3>
                    <h4 className="">ProjectManager + Frontend Dev + QA · Командный учебный проект · 18.02.2026 - 16.04.2026</h4>
                    <Link className="text-blue-500 decoration-solid underline" href={'https://defolt163.github.io/'} target="_blank"><b>GitHub</b></Link> 
                    <p className="mt-2">Командный учебный проект по техническому заданию СимбирСофт</p>
                    <p>Моя задача в качестве фронтенд разработчика была в реализации стороны организации <br/>
                    </p>
                    <p><b>Основные задачи и достижения: </b></p>
                    <ul className="list-disc list-inside"> 
                        <li>Разрабатывал frontend-часть приложения для организации, отвечающую за функциональность стороны организации.</li>
                        <li>Работал с отдельной веткой проекта в GitHub, участвовал в командной разработке.</li>
                        <li>Организовывал командную работу: распределял задачи по ролям, координировал выполнение и контролировал прогресс с помощью WEEEK.</li>
                        <li>Проводил два командных созвона в неделю на протяжении 9 недель.</li>
                        <li>Договорился с командой WEEEK о предоставлении годового бесплатного доступа к Pro-версии для всей команды.</li>
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2 work_block_special_items"><p>NextJs</p> <p>REST API</p> <p>Git</p> <p>JWT</p> <p>PWA</p> <p>JavaScript</p> <p>WEEEK</p></div>
                </div>
            </div>
            <div className="max-sm:mb-8 max-sm:mb-4 max-lg:flex-col flex flex-row justify-between items-center mb-12 text-[#6D6D6D] cursor-pointer hover:text-[#003030]">
                <Image className="max-sm:mb-4 max-lg:w-auto max-lg:h-full max-lg:mb-6 w-[40%] h-auto object-contain" src={CRM} alt="CRM экран"/>
                <div className="max-lg:w-full w-[55%]">
                    <h3 className="text-2xl font-bold text-[#999999]">CRM-система с AI-анализом отчётов сотрудников малого бизнеса</h3>
                    <h4 className="mb-2">Full-stack Developer  · Коммерческий заказ · 5.07.2025 - 02.09.2025</h4>
                    <ul className="list-disc list-inside"> 
                        <li>Разработал CRM-систему для управления сотрудниками, задачами и контроля результатов работы.</li>
                        <li>Реализовал систему ролей и разграничение доступа для администратора, руководителя и сотрудника.</li>
                        <li>Интегрировал локальную LLM через Ollama для анализа отчётов сотрудников и формирования структурированных сводок о выполненной работе.</li>
                        <li>Реализовал серверные API-маршруты, взаимодействие с MySQL и механизм уведомлений через WebSocket.</li>
                        <li>Настроил контейнеризацию приложения и окружения AI с использованием Docker Compose.</li>
                        <li>Разработал frontend и серверную логику приложения на Next.js.</li>
                    </ul>
                    
                    <div className="mt-2 flex flex-wrap gap-2 work_block_special_items"><p>NextJs</p> <p>NodeJs</p> <p>React</p> <p>REST API</p> <p>JWT</p> <p>Ollama LLM</p> <p>JavaScript</p> <p>WebSocket</p> <p>MySQL</p> <p>Docker</p> <p>ShadCN</p> <p>Tailwind CSS</p></div>
                </div>
            </div>
            <div className="max-sm:mb-8 max-sm:mb-4 max-lg:flex-col flex flex-row-reverse justify-between items-center mb-12 cursor-pointer text-[#6D6D6D] hover:text-[#003030] transition-colors duration-300 hover:duration-300">
                <Image className="max-sm:mb-4 max-lg:w-auto max-lg:h-full max-lg:mb-6 w-[40%] h-auto object-contain" src={DronesWork} alt="Экран визуализации дронов"/>
                <div className="max-lg:w-full w-[55%]">
                    <h3 className="text-2xl font-bold text-[#999999]">3D-визуализация маршрутов беспилотных летательных аппаратов</h3>
                    <h4 className="mb-2">Frontend Dev  · Коммерческий заказ · 03.07.2025 - 27.07.2025</h4>
                    <ul className="list-disc list-inside"> 
                        <li>Разработал веб-приложение для визуализации маршрутов БПЛА на интерактивной трёхмерной карте с использованием CesiumJS.</li>
                        <li>Реализовал отображение траекторий полёта и тепловой карты на основе координат дронов.</li>
                        <li>Реализовал визуализацию зон контроля и отслеживание положения дронов относительно заданных зон.</li>
                        <li>Добавил фильтрацию по дронам и зонам, переключение слоёв карты и отображение событий.</li>
                        <li>Реализовал формирование отчётов о событиях и экспорт данных в CSV.</li>
                    </ul>
                    
                    <div className="mt-2 flex flex-wrap gap-2 work_block_special_items"><p>JavaScript</p> <p>CesiumJS</p> <p>Turf.js</p> <p>HTML</p> <p>CSS</p></div>
                </div>
            </div>
            <div className="max-lg:flex-col flex flex-row justify-between items-center mb-12 cursor-pointer text-[#6D6D6D] hover:text-[#003030] transition-colors duration-300 hover:duration-300">
                <Image className="max-sm:mb-4 max-lg:w-auto max-lg:h-full max-lg:mb-6 w-[40%] h-auto object-contain" src={Sateco} alt="Экран сайта Sateco.ru"/>
                <div className="max-lg:w-full w-[55%]">
                    <h3 className="text-2xl font-bold text-[#999999]">Корпоративный сайт транспортной компании</h3>
                    <h4 className="">Frontend Dev + Web Designer · Коммерческий заказ · 25.08.2023 - 04.10.2023</h4>
                    <Link className="text-blue-500 decoration-solid underline" href={'https://sateco.ru'} target="_blank"><b>Открыть сайт Sateco.ru</b></Link>
                    <ul className="list-disc list-inside mt-2"> 
                        <li>Во время изучения библиотеки React, разработал корпоративный сайт транспортной компании на основе технического задания, используяю свеже-изученную технологию.</li>
                        <li>Прорабатывал различные варианты дизайна и совместно с заказчиком последовательно дорабатывал визуальное оформление до согласованного результата.</li>
                        <li>Реализовал пользовательский интерфейс на React.</li>
                        <li>Настроил клиентскую маршрутизацию с помощью React Router, обеспечив переходы между страницами без полной перезагрузки сайта.</li>
                    </ul>
                    
                    <div className="mt-2 flex flex-wrap gap-2 work_block_special_items"><p>JavaScript</p> <p>React</p> <p>React Router</p> <p>HTML</p> <p>SASS</p> <p>PHPMailer</p></div>
                </div>
            </div>
        </section>
    )
}