import { useState } from "react";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormGroup,
  Label,
  Input,
  CategoriesGrid,
  CategoryButton,
  CategoryIcon,
  PrimaryButton,
} from "./ExpenseForm.styled";

const ExpenseForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    date: "",
    amount: "",
  });

  const categories = [
    { name: "Еда", icon: "/images/icons/category1.svg" },
    { name: "Транспорт", icon: "/images/icons/category2.svg" },
    { name: "Жилье", icon: "/images/icons/category3.svg" },
    { name: "Развлечения", icon: "/images/icons/category4.svg" },
    { name: "Образование", icon: "/images/icons/category5.svg" },
    { name: "Другое", icon: "/images/icons/category6.svg" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategorySelect = (categoryName) => {
    setFormData((prev) => ({
      ...prev,
      category: categoryName,
    }));
  };

  // Проверка валидности полей
  const isFieldValid = (fieldName) => {
    switch (fieldName) {
      case "description":
        return formData.description.trim().length > 0;
      case "date":
        return formData.date !== "";
      case "amount":
        return formData.amount !== "" && parseFloat(formData.amount) > 0;
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация
    if (!formData.description.trim()) {
      alert("Пожалуйста, введите описание");
      return;
    }
    if (!formData.category) {
      alert("Пожалуйста, выберите категорию");
      return;
    }
    if (!formData.date) {
      alert("Пожалуйста, выберите дату");
      return;
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      alert("Пожалуйста, введите корректную сумму");
      return;
    }

    // Подготовка данных для отправки
    const expenseData = {
      id: Date.now(), // Временный ID
      description: formData.description.trim(),
      category: formData.category,
      date: formatDate(formData.date),
      amount: parseFloat(formData.amount),
    };

    onSubmit?.(expenseData);

    // Очистка формы
    setFormData({
      description: "",
      category: "",
      date: "",
      amount: "",
    });
  };

  const handleCancel = () => {
    // Очистка формы
    setFormData({
      description: "",
      category: "",
      date: "",
      amount: "",
    });
    onCancel?.();
  };

  // Функция для форматирования даты в DD.MM.YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Получение текущей даты для input[type="date"]
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <Input
            id="description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="Пятерочка"
            className={isFieldValid("description") ? "valid" : ""}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Категория</Label>
          <CategoriesGrid>
            {categories.map((category) => (
              <CategoryButton
                key={category.name}
                type="button"
                $selected={formData.category === category.name}
                onClick={() => handleCategorySelect(category.name)}
              >
                <CategoryIcon src={category.icon} alt={category.name} />
                {category.name}
              </CategoryButton>
            ))}
          </CategoriesGrid>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date">Дата</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            max={getCurrentDate()}
            className={isFieldValid("date") ? "valid" : ""}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount">Сумма</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="3 500"
            min="0.01"
            step="0.01"
            className={isFieldValid("amount") ? "valid" : ""}
            required
          />
        </FormGroup>

        <PrimaryButton type="submit">Добавить новый расход</PrimaryButton>
      </Form>
    </FormWrapper>
  );
};

export default ExpenseForm;
