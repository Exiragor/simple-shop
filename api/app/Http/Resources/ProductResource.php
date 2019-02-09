<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'category' => new CategoryResource($this->whenLoaded('category')),
            'name' => $this->name,
            'code' => $this->code,
            'description' => $this->description,
            'price' => $this->price,
            'img' => $this->img_path,
            'specifications' => json_decode($this->specifications),
            'tags' => json_decode($this->tags),
        ];
    }
}
