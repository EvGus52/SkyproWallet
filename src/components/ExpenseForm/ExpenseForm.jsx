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

const ExpenseForm = ({ onSubmit, onCancel, isFormSubmitting = false }) => {
  const { register, handleSubmit, setValue, watch, reset, formState } = useForm(
    {
      mode: "onChange", // Валидация при изменении

      defaultValues: {
        description: "",
        category: "",
        date: "",
        amount: "",
      },
      mode: "onChange",
      reValidateMode: "onChange", // обновляет валидацию при каждом изменении
    });

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
    trigger("category");
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

      // Сбрасываем форму и валидацию
      reset();
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {/* Описание */}
        <FormGroup>
          <Label htmlFor="description" $hasError={hasFieldError("description")}>
            Описание
          </Label>
          <Input
            id="description"
            type="text"
            placeholder="Введите описание"
            $hasError={!!formState.errors.description}
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

        {/* Категория */}
        <FormGroup>
          <Label $hasError={hasFieldError("category")}>Категория</Label>
          <Label htmlFor="date" $hasError={hasFieldError("date")}>
            Дата
          </Label>
          <Input
            type="date"
            placeholder="Введите дату"
            $hasError={!!formState.errors.date}
            {...register("date", {
              required: "Введите дату",
              validate: (value) => {
                if (!value) return "Введите дату";
                const pattern = /^(\d{4})-(\d{2})-(\d{2})$/;
                if (!pattern.test(value)) {
                  return "Неверный формат даты (ГГГГ-ММ-ДД)";
                }
                const [, y, m, d] = value.match(pattern);
                const year = parseInt(y, 10);
                const month = parseInt(m, 10);
                const day = parseInt(d, 10);
                if (month < 1 || month > 12) return "Неверный месяц";
                if (day < 1 || day > 31) return "Неверный день";
                if (year < 1900 || year > 2100) return "Несуществующий год";
                return true;
              },
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

        {/* Сумма */}
        <FormGroup>
          <Label htmlFor="amount" $hasError={hasFieldError("amount")}>
            Сумма

          </Label>
          <Input
            type="text"
            placeholder="Введите сумму"
            $hasError={!!formState.errors.amount}
            {...register("amount", {
              required: "Введите сумму",
              validate: (value) => {
                if (!value) return "Введите сумму";

                // Проверка: только число
                if (!/^\d+([.,]\d+)?$/.test(value.trim())) {
                  return "Введите только число без букв";
                }

                const num = parseFloat(value.replace(",", "."));
                if (isNaN(num)) return "Некорректная сумма";
                if (num <= 0) return "Сумма должна быть больше 0";
                if (num > 1_000_000_000) return "Слишком большая сумма";

                return true;
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

        {/* Кнопка */}
        <PrimaryButton
          type="submit"
          disabled={
            isFormSubmitting ||
            formState.isSubmitting ||
            Object.keys(formState.errors).length > 0
          }

        >
          {isFormSubmitting ? "Добавление..." : "Добавить новый расход"}
        </PrimaryButton>
      </Form>
    </FormWrapper>
  );
};

export default ExpenseForm;