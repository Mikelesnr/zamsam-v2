<?php

namespace App\Http\Controllers;

use App\Services\GeminiChatService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use RuntimeException;

class ChatController extends Controller
{
    public function __construct(private readonly GeminiChatService $gemini)
    {
    }

    public function respond(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'message' => ['required', 'string', 'max:1000'],
                'history' => ['sometimes', 'array', 'max:20'],
                'history.*.role' => ['required_with:history', 'string', 'in:user,bot'],
                'history.*.text' => ['required_with:history', 'string', 'max:1000'],
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'error' => 'invalid_request',
                'message' => $e->validator->errors()->first(),
            ], 422);
        }

        try {
            $reply = $this->gemini->reply($validated['history'] ?? [], $validated['message']);
        } catch (RuntimeException $e) {
            Log::error('Chat reply failed', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'error' => 'chat_unavailable',
                'message' => "Sorry, I'm having trouble responding right now. Please reach us on WhatsApp for an immediate answer.",
            ], 503);
        }

        return response()->json([
            'success' => true,
            'reply' => $reply,
        ]);
    }
}