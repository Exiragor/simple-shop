<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Http\Resources\CommentResource;

class CommentsController extends Controller
{
    public function index(Request $request, Comment $comment) {
        $count = $request->get('count');
        $count = (is_numeric($count) && $count > 0) ? $count : 20;
        $page = $request->get('page');
        $page = (is_numeric($page) && $page > 0) ? $page - 1 : 0;

        $comments = $comment->active()->skip($page * $count)->paginate($count);

        return CommentResource::collection($comments);
    }

    public function create(Request $request, Comment $comment) {
        $name = $request->json('name');
        $text = $request->json('text');

        $comment->name = $name;
        $comment->text = $text;
        $comment->save();

        return response()->json(['status' => true]);
    }
}
