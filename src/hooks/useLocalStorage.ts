import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// Definimos un tipo genérico para el valor almacenado en localStorage
type LocalStorageValue<T> = T | null;

// Definimos una función para obtener el valor almacenado en localStorage
function getInitialValue<T>(key: string, initialValue: T): LocalStorageValue<T> {
  try {
    const item = window.localStorage.getItem(key);
    if (item === null) return initialValue;
    // Si el valor no es null, lo devolvemos sin ningún cambio de tipo
    return item as any;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

function useLocalStorage<T extends string | number>(
  key: string,
  initialValue: T
): [LocalStorageValue<T>, Dispatch<SetStateAction<LocalStorageValue<T>>>] {
  // Estado local para almacenar el valor actual
  const [storedValue, setStoredValue] = useState<LocalStorageValue<T>>(() =>
    getInitialValue<T>(key, initialValue)
  );

  // Actualizar el estado cuando cambie el valor en localStorage
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(event.newValue !== null ? (event.newValue as T) : null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  // Función para actualizar el valor en localStorage
  const updateStoredValue: Dispatch<SetStateAction<LocalStorageValue<T>>> = (value) => {
    try {
      setStoredValue(value);
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, value.toString());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, updateStoredValue];
}

export default useLocalStorage;