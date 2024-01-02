/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Omit<import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getTopLevelComments(): Promise<Omit<import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getCommentsByParentId(parentId: string): Promise<Omit<import("mongoose").Document<unknown, {}, Comment> & Comment & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: number): string;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
