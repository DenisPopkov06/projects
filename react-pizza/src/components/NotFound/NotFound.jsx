import style from "./style.module.scss";

const NotFound = () => {
  return (
    <div className={style.root}>
      <span>
        😔 <br />
        Страница не найдена
      </span>
      <div className={style.discribtion}>
        К сожалению данная страница отсутствут в нашем интернет-магазине
      </div>
    </div>
  );
};

export default NotFound;
