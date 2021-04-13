const store = {
  'idBoard' : {
    key : {
      title: "Стратовая страница",
      id: 'idBoard'
    },
    columns: {
      'idColumn': {
        key: {
          id: 'idColumn',
          title: 'Колонка карточек'
        },
        cards: {
          'idCard' : {
            key: {
              id : 'idCard',
              title: "Первая карточка",
              desc: "Сюда можно добавить описание",
              background: "red",
            }
          }
        }
      },

    }
  },
}


    //       cards: [
    //         {

    //           comments: [
    //             {
    //               value: "Карточки, можно комментировать",
    //               date: new Date(),
    //             },
    //           ],
    //           checkList: [
    //             {
    //               id: "testId",
    //               title: "Знакомство с приложением",
    //               checkItems: [
    //                 {
    //                   value: "Открыть первую карточку",
    //                   status: true,
    //                 },
    //                 {
    //                   value: "Удалить первую задачу в чек-листе",
    //                   status: false,
    //                 },
    //               ],
    //             },
    //           ],
    //           background: "red",
    //         },
    //         {
    //           id: "id2",
    //           title: "Карточка №2",
    //           desc:
    //             "Кликни меня что бы изменить описание задачи. Кстати, таким способом вы так же можете менять названия карточек и чек-листов",
    //           comments: [],
    //           checkList: [],
    //           background: "blue",
    //         },
    //       ],
    //     },
    //   ],
    // },


export default store;
