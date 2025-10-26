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
} from "./ExpenseForm.styled";

const ExpenseForm = ({ onSubmit, isFormSubmitting = false }) => {
  const { register, handleSubmit, setValue, watch, reset, formState } = useForm(
    {
      mode: "onChange",
      defaultValues: {
        description: "",
        category: "",
        date: "",
        amount: "",
      },
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
  const descriptionValue = watch("description");
  const dateValue = watch("date");
  const amountValue = watch("amount");

  const handleCategorySelect = (categoryValue) => {
    setValue("category", categoryValue, { shouldValidate: true });
  };

  // Функция для проверки валидности поля
  const isFieldValid = (fieldName, value) => {
    return value && !formState.errors[fieldName];
  };

  // Функция для проверки наличия ошибки
  const hasFieldError = (fieldName) => {
    return !!formState.errors[fieldName];
  };

  // Функция для получения класса поля
  const getFieldClass = (fieldName, value) => {
    if (hasFieldError(fieldName)) return "error";
    if (isFieldValid(fieldName, value)) return "valid";
    return "";
  };

  const onFormSubmit = (data) => {
    // Подготовка данных для отправки в формате API
    const expenseData = {
      description: data.description.trim(),
      category: data.category,
      date: formatDateForAPI(data.date),
      sum: parseFloat(data.amount),
    };

    onSubmit?.(expenseData);
    reset(); // Автоматическая очистка формы
  };

  // Функция для форматирования даты в формат API (M-D-YYYY)
  const formatDateForAPI = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <FormGroup>
          <Label htmlFor="description" $hasError={hasFieldError("description")}>
            Описание
          </Label>
          <Input
            id="description"
            {...register("description", {
              required: "Введите описание",
              minLength: {
                value: 4,
                message: "Описание должно содержать минимум 4 символа",
              },
            })}
            type="text"
            placeholder="Введите описание (минимум 4 символа)"
            className={getFieldClass("description", descriptionValue)}
          />
          {formState.errors.description && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.description.message}
            </span>
          )}
        </FormGroup>

        <FormGroup>
          <Label $hasError={hasFieldError("category")}>Категория</Label>
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
          {/* Скрытое поле для валидации категории */}
          <input
            {...register("category", {
              required: "Выберите категорию",
            })}
            type="hidden"
          />
          {formState.errors.category && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.category.message}
            </span>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date" $hasError={hasFieldError("date")}>
            Дата
          </Label>
          <Input
            id="date"
            {...register("date", {
              required: "Выберите дату",
            })}
            type="date"
            placeholder="Выберите дату"
            className={getFieldClass("date", dateValue)}
          />
          {formState.errors.date && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.date.message}
            </span>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount" $hasError={hasFieldError("amount")}>
            Сумма
          </Label>
          <Input
            id="amount"
            {...register("amount", {
              required: "Введите сумму",
              min: {
                value: 0.01,
                message: "Сумма должна быть больше 0",
              },
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Введите корректную сумму",
              },
            })}
            type="number"
            placeholder="Введите сумму"
            min="0.01"
            step="0.01"
            className={getFieldClass("amount", amountValue)}
          />
          {formState.errors.amount && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.amount.message}
            </span>
          )}
        </FormGroup>

        <PrimaryButton
          type="submit"
          disabled={
            isFormSubmitting ||
            formState.isSubmitting ||
            Object.keys(formState.errors).length > 0
          }
        >
          {isFormSubmitting || formState.isSubmitting
            ? "Добавление..."
            : "Добавить новый расход"}
        </PrimaryButton>
      </Form>
    </FormWrapper>
  );
};

export default ExpenseForm;
