<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrder extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstName' => 'required',
            'lastName' => 'required',
            'phone' => 'required',
            'products' => 'required|array',
            'products.*' => 'object',
            'products.*.id' => 'integer|exists:products,id',
            'products.*.count' => 'integer|min:1'
        ];
    }
}