import { Form, FormState } from '@pages/api/v1/suscribe';
import { useRef, useState } from 'react';

export function useSubscribeToNewsletter() {
	const [form, setForm] = useState<FormState>({ state: Form.Initial });
	const inputEl = useRef(null);


}