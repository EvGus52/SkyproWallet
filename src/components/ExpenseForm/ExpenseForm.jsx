import { useForm } from "react-hook-form";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormGroup,
  Label,
  Input,
  CategoriesContainer,
  CategoryButton,
  CategoryIcon,
  PrimaryButton,
  ErrorStar,
} from "./ExpenseForm.styled";

const ExpenseForm = ({ onSubmit, isFormSubmitting = false }) => {
  const { register, handleSubmit, setValue, watch, reset, formState } = useForm(
    {
      defaultValues: {
        description: "",
        category: "",
        date: "",
        amount: "",
      },
      mode: "onChange",
    }
  );

  const categories = [
    { name: "Еда", value: "food", icon: "/images/icons/category1.svg" },
    {
      name: "Транспорт",
      value: "transport",
      icon: "/images/icons/category2.svg",
    },
    { name: "Жилье", value: "housing", icon: "/images/icons/category3.svg" },
    { name: "Развлечения", value: "joy", icon: "/images/icons/category4.svg" },
    {
      name: "Образование",
      value: "education",
      icon: "/images/icons/category5.svg",
    },
    { name: "Другое", value: "others", icon: "/images/icons/category6.svg" },
  ];

  const selectedCategory = watch("category");

  const handleCategorySelect = (categoryValue) => {
    setValue("category", categoryValue, { shouldValidate: true });
  };

  const onFormSubmit = (data) => {
    const amount = parseFloat(data.amount);
    const date = new Date(data.date);

    if (!isNaN(amount) && !isNaN(date.getTime()) && selectedCategory) {
      const expenseData = {
        description: data.description.trim(),
        category: data.category,
        date: data.date,
        sum: amount,
      };
      onSubmit?.(expenseData);
      reset();
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {/* Описание */}
        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <Input
            id="description"
            type="text"
            placeholder="Введите описание"
            $hasError={!!formState.errors.description}
            {...register("description", {
              required: "Введите описание",
              minLength: { value: 1, message: "Описание не может быть пустым" },
            })}
          />
          {formState.errors.description && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.description.message}
            </span>
          )}
        </FormGroup>

        {/* Категория */}
        <FormGroup>
          <Label htmlFor="category">
            Категория
            {!selectedCategory && <ErrorStar>*</ErrorStar>}
          </Label>
          <CategoriesContainer>
            {categories.map((category) => (
              <CategoryButton
                key={category.value}
                type="button"
                $selected={selectedCategory === category.value}
                onClick={() => handleCategorySelect(category.value)}
              >
                <CategoryIcon
                  src={category.icon}
                  alt={category.name}
                  $selected={selectedCategory === category.value}
                />
                {category.name}
              </CategoryButton>
            ))}
          </CategoriesContainer>
          <input {...register("category", { required: true })} type="hidden" />
        </FormGroup>

        {/* Дата */}
        <FormGroup>
          <Label>
            Дата {formState.errors.date && <ErrorStar>*</ErrorStar>}
          </Label>
          <Input
            type="text"
            placeholder="Введите дату"
            $hasError={!!formState.errors.date}
            {...register("date", {
              required: "Введите дату",
              validate: (value) =>
                !isNaN(new Date(value).getTime()) || "Некорректная дата",
            })}
          />
        </FormGroup>

        {/* Сумма */}
        <FormGroup>
          <Label>
            Сумма {formState.errors.amount && <ErrorStar>*</ErrorStar>}
          </Label>
          <Input
            type="text"
            placeholder="Введите сумму"
            $hasError={!!formState.errors.amount}
            {...register("amount", {
              required: "Введите сумму",
              validate: (value) =>
                !isNaN(parseFloat(value)) || "Некорректная сумма",
            })}
          />
        </FormGroup>

        {/* Кнопка */}
        <PrimaryButton
          type="submit"
          disabled={isFormSubmitting || !formState.isValid || !selectedCategory}
        >
          {isFormSubmitting ? "Добавление..." : "Добавить новый расход"}
        </PrimaryButton>
      </Form>
    </FormWrapper>
  );
};

export default ExpenseForm;

// import { useForm } from "react-hook-form";
// import {
//   FormWrapper,
//   FormTitle,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   CategoriesContainer,
//   CategoryButton,
//   CategoryIcon,
//   PrimaryButton,
//   ErrorStar,
// } from "./ExpenseForm.styled";

// const ExpenseForm = ({ onSubmit, isFormSubmitting = false }) => {
//   const { register, handleSubmit, setValue, watch, reset, formState } = useForm(
//     {
//       defaultValues: {
//         description: "",
//         category: "",
//         date: "",
//         amount: "",
//       },
//       mode: "onChange",
//     }
//   );

//   const categories = [
//     { name: "Еда", value: "food", icon: "/images/icons/category1.svg" },
//     {
//       name: "Транспорт",
//       value: "transport",
//       icon: "/images/icons/category2.svg",
//     },
//     { name: "Жилье", value: "housing", icon: "/images/icons/category3.svg" },
//     { name: "Развлечения", value: "joy", icon: "/images/icons/category4.svg" },
//     {
//       name: "Образование",
//       value: "education",
//       icon: "/images/icons/category5.svg",
//     },
//     { name: "Другое", value: "others", icon: "/images/icons/category6.svg" },
//   ];

//   const selectedCategory = watch("category");

//   const handleCategorySelect = (categoryValue) => {
//     setValue("category", categoryValue, { shouldValidate: true });
//   };

//   const onFormSubmit = (data) => {
//     const expenseData = {
//       description: data.description.trim(),
//       category: data.category,
//       date: data.date,
//       sum: data.amount,
//     };
//     onSubmit?.(expenseData);
//     reset();
//   };

//   return (
//     <FormWrapper>
//       <FormTitle>Новый расход</FormTitle>
//       <Form onSubmit={handleSubmit(onFormSubmit)}>
//         {/* Описание */}
//         <FormGroup>
//           <Label htmlFor="description">Описание</Label>
//           <Input
//             id="description"
//             {...register("description", {
//               required: "Введите описание",
//               minLength: { value: 1, message: "Описание не может быть пустым" },
//             })}
//             type="text"
//             placeholder="Введите описание"
//             $hasError={!!formState.errors.description}
//           />
//           {formState.errors.description && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {formState.errors.description.message}
//             </span>
//           )}
//         </FormGroup>

// {/* Категория */}
// <FormGroup>
//   <Label htmlFor="category">
//     Категория
//     {!selectedCategory && <ErrorStar>*</ErrorStar>}
//   </Label>
//   <CategoriesContainer>
//     {categories.map((category) => (
//       <CategoryButton
//         key={category.value}
//         type="button"
//         $selected={selectedCategory === category.value}
//         onClick={() => handleCategorySelect(category.value)}
//       >
//         <CategoryIcon
//           src={category.icon}
//           alt={category.name}
//           $selected={selectedCategory === category.value}
//         />
//         {category.name}
//       </CategoryButton>
//     ))}
//   </CategoriesContainer>
//   <input {...register("category", { required: true })} type="hidden" />
// </FormGroup>

//         {/* Дата */}
//         <FormGroup>
//           <Label htmlFor="date">
//             Дата {formState.errors.date && <ErrorStar>*</ErrorStar>}
//           </Label>
//           <Input
//             id="date"
//             type="text"
//             placeholder="Введите дату"
//             $hasError={!!formState.errors.date}
//             {...register("date", {
//               required: true,
//               validate: (value) =>
//                 !isNaN(new Date(value).getTime()) || "Некорректная дата",
//             })}
//           />
//         </FormGroup>

//         {/* Сумма */}
//         <FormGroup>
//           <Label htmlFor="amount">
//             Сумма {formState.errors.amount && <ErrorStar>*</ErrorStar>}
//           </Label>
//           <Input
//             id="amount"
//             // type="number"
//             type="text"
//             placeholder="Введите сумму"
//             $hasError={!!formState.errors.amount}
//             {...register("amount", {
//               required: true,
//               pattern: {
//                 value: /^\d+(\.\d{1,2})?$/,
//                 message: "Некорректная сумма",
//               },
//             })}
//           />
//         </FormGroup>

//         {/* Кнопка */}
//         <PrimaryButton
//           type="submit"
//           disabled={!formState.isValid || isFormSubmitting}
//         >
//           {isFormSubmitting ? "Добавление..." : "Добавить новый расход"}
//         </PrimaryButton>
//       </Form>
//     </FormWrapper>
//   );
// };

// export default ExpenseForm;

// import { useForm } from "react-hook-form";
// import {
//   FormWrapper,
//   FormTitle,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   CategoriesContainer,
//   CategoryButton,
//   CategoryIcon,
//   PrimaryButton,
// } from "./ExpenseForm.styled";

// const ExpenseForm = ({ onSubmit, onCancel, isFormSubmitting = false }) => {
//   const { register, handleSubmit, setValue, watch, reset, formState } = useForm(
//     {
//       defaultValues: {
//         description: "",
//         category: "",
//         date: "",
//         amount: "",
//       },
//     }
//   );

//   const categories = [
//     { name: "Еда", value: "food", icon: "/images/icons/category1.svg" },
//     {
//       name: "Транспорт",
//       value: "transport",
//       icon: "/images/icons/category2.svg",
//     },
//     { name: "Жилье", value: "housing", icon: "/images/icons/category3.svg" },
//     { name: "Развлечения", value: "joy", icon: "/images/icons/category4.svg" },
//     {
//       name: "Образование",
//       value: "education",
//       icon: "/images/icons/category5.svg",
//     },
//     { name: "Другое", value: "others", icon: "/images/icons/category6.svg" },
//   ];

//   const selectedCategory = watch("category");

//   const handleCategorySelect = (categoryValue) => {
//     setValue("category", categoryValue, { shouldValidate: true });
//   };

//   const onFormSubmit = (data) => {
//     // Подготовка данных для отправки в формате API
//     const expenseData = {
//       description: data.description.trim(),
//       category: data.category,
//       date: formatDateForAPI(data.date),
//       sum: parseFloat(data.amount),
//     };

//     onSubmit?.(expenseData);
//     reset(); // Автоматическая очистка формы
//   };

//   const _handleCancel = () => {
//     reset(); // Очистка формы
//     onCancel?.();
//   };

//   // Функция для форматирования даты в формат API (M-D-YYYY)
//   const formatDateForAPI = (dateString) => {
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month}-${day}-${year}`;
//   };

//   return (
//     <FormWrapper>
//       <FormTitle>Новый расход</FormTitle>
//       <Form onSubmit={handleSubmit(onFormSubmit)}>
//         <FormGroup>
//           <Label htmlFor="description">Описание</Label>
//           <Input
//             id="description"
//             {...register("description", {
//               required: "Введите описание",
//               minLength: {
//                 value: 1,
//                 message: "Описание не может быть пустым",
//               },
//             })}
//             type="text"
//             placeholder="Введите описание"
//           />
//           {formState.errors.description && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {formState.errors.description.message}
//             </span>
//           )}
//         </FormGroup>

//         <FormGroup>
//           <Label>Категория</Label>
//           <CategoriesContainer>
//             {categories.map((category) => (
//               <CategoryButton
//                 key={category.value}
//                 type="button"
//                 $selected={selectedCategory === category.value}
//                 onClick={() => handleCategorySelect(category.value)}
//               >
//                 <CategoryIcon
//                   src={category.icon}
//                   alt={category.name}
//                   $selected={selectedCategory === category.value}
//                 />
//                 {category.name}
//               </CategoryButton>
//             ))}
//           </CategoriesContainer>
//           {/* Скрытое поле для валидации категории */}
//           <input
//             {...register("category", {
//               required: "Выберите категорию",
//             })}
//             type="hidden"
//           />
//           {formState.errors.category && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {formState.errors.category.message}
//             </span>
//           )}
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="date">Дата</Label>
//           <Input
//             id="date"
//             {...register("date", {
//               required: "Выберите дату",
//             })}
//             type="date"
//             placeholder="Выберите дату"
//           />
//           {formState.errors.date && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {formState.errors.date.message}
//             </span>
//           )}
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="amount">Сумма</Label>
//           <Input
//             id="amount"
//             {...register("amount", {
//               required: "Введите сумму",
//               min: {
//                 value: 0.01,
//                 message: "Сумма должна быть больше 0",
//               },
//               pattern: {
//                 value: /^\d+(\.\d{1,2})?$/,
//                 message: "Введите корректную сумму",
//               },
//             })}
//             type="number"
//             placeholder="Введите сумму"
//             min="0.01"
//             step="0.01"
//           />
//           {formState.errors.amount && (
//             <span style={{ color: "red", fontSize: "12px" }}>
//               {formState.errors.amount.message}
//             </span>
//           )}
//         </FormGroup>

//         <PrimaryButton
//           type="submit"
//           disabled={isFormSubmitting || formState.isSubmitting}
//         >
//           {isFormSubmitting || formState.isSubmitting
//             ? "Добавление..."
//             : "Добавить новый расход"}
//         </PrimaryButton>
//       </Form>
//     </FormWrapper>
//   );
// };

// export default ExpenseForm;
